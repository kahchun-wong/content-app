<template>
    <Breadcrumb class="ss-page-nav" :home="home" :model="items">
        <template #item="{ item }">
            <FaasNuxtLink class="ss-page-nav-link p-menuitem-link" :to="item.url" >
                <Icon v-if="item.icon" :name="item.icon" />
                <span>{{ item.label }}</span>
            </FaasNuxtLink>
        </template>
    </Breadcrumb>
</template>

<script setup lang="ts">
    import type { MenuItem } from 'primevue/menuitem'

    const home = { icon: 'prime:home', url: useRuntimeConfig().app.baseURL }

    const pagePath = useContent().page.value?._path
    const pathSegments = pagePath.split('/').filter(Boolean)

    const items: MenuItem[] = []
    let path = ''
    for (const segment of pathSegments) {
        path += `/${segment}`
        const { data } = await useAsyncData('page-header' + path, () => queryContent().where({ _path: { $eq: path } }).findOne())

        if (data.value?._path) {
            items.push({
                label: data.value?.title,
                url: data.value?._path
            })
        }
    }
</script>