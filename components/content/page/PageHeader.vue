<template>
    <div class="ss-page-header">
        <PageHeaderNav />
        <div class="ss-page-header-title">
            <i v-if="page.icon" :class="page.icon"></i>
            <h1>{{ page.title }}</h1>
            <Tag value="v1.0.0" rounded />
        </div>
        <p v-if="page.description" class="ss-page-header-description">
            {{ page.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
    const { page } = useContent()
</script>