<template>
    <BlockUI class="ss-navbar-menu-block-overlay" :blocked="navbarMenuActive" fullScreen />
    <header class="ss-navbar" :class="{ 'top': atTop }" ref="navbar">
        <Menubar class="ss-navbar-menu" :model="navigationItems" ref="navbarMenu">
            <template #start>
                <FaasNuxtLink class="ss-navbar-logo-link" :to="baseURL">
                    <img class="ss-navbar-logo" src="~/assets/img/img_logo_softspace.svg" />
                </FaasNuxtLink>
            </template>
            <template #item="{ item, hasSubmenu, root }">
                <FaasNuxtLink class="ss-navbar-menuitem-link p-menuitem-link" :class="{ 'root': root }" :to="item.url">
                    <div class="ss-navbar-menuitem-link-wrapper">
                        <p class="ss-navbar-menuitem-link-title">
                            <Icon class="ss-navbar-menuitem-link-icon" :name="item.icon?? 'mdi:file-document-outline'" />
                            <span class="ss-navbar-menuitem-link-label">{{ item.label }}</span>
                        </p>
                        <p class="ss-navbar-menuitem-link-description" v-if="item.description && !root">{{ item.description }}</p>
                    </div>
                    <Icon 
                        class="ss-navbar-menuitem-link-expand-icon p-submenu-icon" 
                        v-if="hasSubmenu" 
                        :name="root ? 'prime:chevron-down' : 'prime:chevron-right'" 
                    />
                </FaasNuxtLink>
            </template>
            <template #end>
                <Search />
                <FaasNuxtLink to="#">
                    <Button class="ss-navbar-button" label="Login" />
                </FaasNuxtLink>
            </template>
            <template #menubuttonicon>
                <Icon class="ss-navbar-menu-button" name="prime:bars" />
                <Icon class="ss-navbar-menu-button-active" name="prime:times" />
            </template>
        </Menubar>
    </header>
</template>

<script setup lang="ts">
    import type { MenuItem } from 'primevue/menuitem'

    const nuxtApp = useNuxtApp()

    const navbar = ref<HTMLElement | undefined>()
    const navbarHeight = computed(() => navbar.value?.clientHeight ?? 0)
    nuxtApp.$navbarHeight = navbarHeight

    const navbarMenu = ref<HTMLElement | undefined>()
    const navbarMenuActive = ref(false)

    const baseURL = useRuntimeConfig().app.baseURL

    const mapMenuItem = async (navItem: MenuItem): Promise<MenuItem> => {
        const { data } = await nuxtApp.runWithContext(async() => useAsyncData(navItem.url?? '', () => queryContent().where({ _path: { $eq: navItem.url } }).findOne()))

        if ("items" in navItem) {
            delete navItem.url
            return {
                ...navItem,
                label: navItem.label?? data.value?.title,
                icon: navItem.icon?? data.value?.icon,
                description: navItem.description?? data.value?.description,
                items: await Promise.all(navItem.items?.map(async (navItem) => await mapMenuItem(navItem)) ?? [])
            }
        }

        return {
            ...navItem,
            label: navItem.label?? data.value?.title,
            icon: navItem.icon?? data.value?.icon,
            description: navItem.description?? data.value?.description
        }
    }
    const navigationItems = ref(await Promise.all((useAppConfig().navbar?? []).map(async (navItem) => await mapMenuItem(navItem))))
    console.log(navigationItems.value)

    const atTop = ref(true)
    const checkScrollPositionAtTop = () => {
        atTop.value = window.scrollY === 0
    }

    // @ts-ignore
    watch(() => navbarMenu.value?.mobileActive, (active) => {
        console.log(active)
        navbarMenuActive.value = active
    })

    onMounted(() => {
        checkScrollPositionAtTop()
        window.addEventListener("scroll", checkScrollPositionAtTop);
    })

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", checkScrollPositionAtTop);
    })
</script>