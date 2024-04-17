<template>
    <div class="ss-page-header">
        <PageHeaderNav />
        <div class="ss-page-header-title">
            <Icon v-if="page.icon" :name="page.icon" />
            <h1>{{ page.title }}</h1>
            <VersionDropdown v-if="page.product" :product="page.product" />
        </div>
        <p v-if="page.description" class="ss-page-header-description">
            {{ page.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
    const { page } = useContent()
</script>