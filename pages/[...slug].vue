<template>
    <DefaultPage v-slot="{ doc }">
        <PageHeader/>
        <PageBody>
            <ContentRenderer :value="doc" />
        </PageBody>
    </DefaultPage>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })
</script>