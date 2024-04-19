<template>
    <SideNavbar :showHeadings="true" />
    <ApiPage v-slot="{ doc }">
        <PageHeader/>
        <PageBody>
            <ContentRenderer :value="doc" />
        </PageBody>
        <PageSurroundNav />
    </ApiPage>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'api'
    })
</script>