
<template>
    <nav class="ss-sidebar">
        <SideNavbarPageGroup />     
        <PanelMenu class="ss-sidebar-menu" :model="menuItems" :multiple="true" v-model:expandedKeys="expandedKeys">
            <template #item="{ item, root, active, hasSubmenu }">
                <FaasNuxtLink 
                    v-if="!_.isEmpty(item)"
                    :class="{ 
                        'ss-navbar-menuitem-link p-menuitem-link': !root, 
                        'p-panelmenu-header-action': root, 
                        'exact-active': item.type === 'heading' && activeHash.includes(item.hash)
                    }" 
                    :to="item.url"
                >
                    <Icon v-if="root" class="ss-sidebar-menuitem-header-icon" :name="item.icon?? 'mdi:file-document-outline'" />
                    <HttpMethodTag v-if="item.httpMethod" class="ss-sidebar-menuitem-http-method" :httpMethod="item.httpMethod" />
                    <span class="ss-navbar-menuitem-link-label p-menuitem-text">{{ item.label }}</span>
                    <Icon 
                        v-if="hasSubmenu && item.type === 'group'"
                        class="ss-sidebar-menuitem-link-expand-icon p-submenu-icon" 
                        :name="active ? 'prime:chevron-down' : 'prime:chevron-right'" 
                    />
                </FaasNuxtLink>
            </template>
        </PanelMenu>
    </nav>
</template>

<script setup lang="ts">
    import type { MenuItem } from 'primevue/menuitem'
    import type { SideNavbarProps } from './types/SideNavbar'
    import _ from 'lodash'

    const props = withDefaults(defineProps<SideNavbarProps>(), {
        showHeadings: false
    })

    const nuxtApp = useNuxtApp()
    const route = useRoute()

    const mapMenuItem = async (navItem: MenuItem): Promise<MenuItem> => {
        const { data } = await nuxtApp.runWithContext(() => useAsyncData('sidebar' + navItem.url, () => queryContent().where({ _path: { $eq: navItem.url } }).findOne()))

        if (!data.value) { return {} }

        if ("items" in navItem) {
            return {
                ...navItem,
                label: navItem.label?? data.value?.title,
                icon: navItem.icon?? data.value?.icon,
                items: navItem.type === 'page' 
                    ? props.showHeadings ? navItem.items : undefined
                    : await Promise.all(navItem.items?.map(async (navItem) => await mapMenuItem(navItem)) ?? [])
            }
        }

        return {
            ...navItem,
            label: navItem.label?? data.value?.title,
            icon: navItem.icon?? data.value?.icon
        }
    }
    const menuItems = ref(await Promise.all(useSidebarNavigationTree().map(async (navItem) => await mapMenuItem(navItem))))

    const expandedKeys: Ref<Record<string, boolean>> = ref({})
    const expandItem = (item: MenuItem) => {
        if (item.key && item.items && item.items.length) {
            expandedKeys.value[item.key] = true

            for (let child of item.items) {
                expandItem(child);
            }
        }
    }
    const expandAll = () => {
        for (let item of menuItems.value) {
            expandItem(item)
        }
    }

    const activeHash: Ref<string[]> = ref([])
    const observer: Ref<IntersectionObserver | null | undefined> = ref()
    const observerOptions = reactive({
        root: null,
        threshold: 0.5
    })

    const setupObserver = () => {
        observer.value = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')
                if (id) {
                    if (activeHash.value.includes(id)) {
                        activeHash.value.splice(activeHash.value.indexOf(id), 1)
                    }

                    if (entry.isIntersecting) {
                        activeHash.value.push(id)
                    }
                }
            })
        }, observerOptions)
        
        document
            .querySelectorAll('.ss-page h2[id], .ss-page h3[id], .ss-page h4[id], .ss-page h5[id], .ss-page h6[id]')
            .forEach((section) => observer.value?.observe(section))
    }

    onMounted(() => {
        expandAll()
        setupObserver()
    })

    onUnmounted(() => {
        observer.value?.disconnect()
    })

    watch(() => (route.path), async () => {
        menuItems.value = await Promise.all(useSidebarNavigationTree().map(async (navItem) => await mapMenuItem(navItem)))
        expandAll()
    })
</script>
