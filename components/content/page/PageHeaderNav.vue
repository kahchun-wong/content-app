<template>
    <Breadcrumb class="ss-page-nav" :home="home" :model="items">
        <template #item="{ item }">
            <NuxtLink class="ss-page-nav-link p-menuitem-link" :to="item.url" >
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </NuxtLink>
        </template>
    </Breadcrumb>
</template>

<script setup lang="ts">
    import type { MenuItem } from 'primevue/menuitem';

    const home = { icon: 'pi pi-home', url: '/' }

    const pagePath = useContent().page.value?._path
    const pathSegments = pagePath.split('/').filter(Boolean)

    const items: MenuItem[] = []
    let path = ''
    for (const segment of pathSegments) {
        path += `/${segment}`
        const { data } = await useAsyncData(path, () => queryContent(path).findOne())
        if (data.value?._path) {
            items.push({
                label: data.value?.title,
                url: data.value?._path
            })
        }
    }
</script>