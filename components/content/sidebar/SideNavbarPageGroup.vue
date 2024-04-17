<template>
    <div v-if="pageGroup" class="ss-sidebar-page-group">
        <FaasNuxtLink v-if="pageGroup.home" class="ss-sidebar-page-group-home" :to="pageGroup.home">
            <Icon name="prime:chevron-left" />
            <span>Back to home</span>
        </FaasNuxtLink>
  
        <div v-if="pageGroup.title" class="ss-sidebar-page-group-title">
          <span>{{ pageGroup.title }}</span>
          <PlatformDropdown v-if="versionProduct" :product="versionProduct" />
        </div>
    </div>    
</template>
  
<script setup lang="ts">
    import type { PageGroupConfig, PageGroupItem } from './types/SideNavbarPageGroup'

    const { page } = useContent()
    const route = useRoute()

    const resolvePageGroup = (): PageGroupItem | undefined => {
        const pageGroup: PageGroupConfig = useAppConfig().pageGroup || {}
        const keys = Object.keys(pageGroup)

        for (const base of keys) {
            if (useRoute().path.startsWith(base)) {
                return pageGroup[base]
            }
        }
    }

    const pageGroup = ref(resolvePageGroup())
    const versionProduct = ref(page.value.product)

    watch(() => (route.path), () => {
        pageGroup.value = resolvePageGroup()
        versionProduct.value = page.value.versionProduct
    })
</script>