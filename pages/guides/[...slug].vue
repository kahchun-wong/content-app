<template>
    <SideNavbar />
    <DocsPage v-slot="{ doc }">
        <PageHeader/>
        <PageBody>
            <ContentRenderer :value="doc" />
        </PageBody>
        <PageSurroundNav />
    </DocsPage>
    <PageToc />
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'guide'
    })
</script>