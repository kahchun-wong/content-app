
<template>
    <header class="ss-navbar" :class="{ 'top': atTop }" ref="navbar">
        <MegaMenu class="ss-navbar-menu" :model="items">
            <template #start>
                <NuxtLink class="ss-navbar-logo-link" :to="baseURL">
                    <img class="ss-navbar-logo" src="~/assets/img/img_logo_softspace.svg" />
                </NuxtLink>
            </template>
            <template #end>
                <Search />
                <NuxtLink to="#">
                    <Button class="ss-navbar-button" label="Login" />
                </NuxtLink>
            </template>
        </MegaMenu>
    </header>
</template>

<script setup lang="ts">
    const navbar = ref<HTMLElement | undefined>()
    const navbarHeight = computed(() => navbar.value?.clientHeight ?? 0)
    useNuxtApp().$navbarHeight = navbarHeight

    const baseURL = useRuntimeConfig().app.baseURL

    const items = ref([
        {
            label: 'Guides',
            root: true
        },
        {
            label: 'API Reference',
            root: true
        },
        {
            label: 'Partner',
            items: [
                [
                    {
                        items: [
                            { label: 'Become a Partner', subtext: 'Explore more capabilities by signing up as our partner today!' },
                            { label: 'Download Center', icon: 'pi pi-search', subtext: 'Find demo app, SDK, and guides of the solutions here.' },
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Support',
            root: true
        }
    ]);

    const atTop = ref(true)
    const checkScrollPositionAtTop = () => {
        atTop.value = window.scrollY === 0
    }

    onMounted(() => {
        checkScrollPositionAtTop()
        window.addEventListener("scroll", checkScrollPositionAtTop);
    })

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", checkScrollPositionAtTop);
    })
</script>