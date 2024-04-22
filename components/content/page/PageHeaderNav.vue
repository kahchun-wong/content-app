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
    import _ from 'lodash'

    const home = { icon: 'mingcute:home-3-line', url: useRuntimeConfig().app.baseURL }

    const pagePath = useContent().page.value?._path
    const pathSegments = pagePath.split('/').filter(Boolean)

    const items: MenuItem[] = []
    let path = ''
    for (const segment of pathSegments) {
        path += `/${segment}`
        const { data } = await useAsyncData('page-header' + path, () => queryContent().where({ _path: { $eq: path } }).find())

        if (!_.isEmpty(data.value)) {
            const [result, ] = data.value?? []
            items.push({
                label: result.title,
                url: result._path
            })
        }
    }
</script>