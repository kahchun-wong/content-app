<template>
    <div class="ss-page-header">
        <div class="ss-page-header-nav">
            <!-- TODO: Add breadcrumb-->
        </div>
        <div class="ss-page-header-title">
            <i v-if="icon" :class="icon"></i>
            <h1>{{ title }}</h1>
        </div>
        <p class="ss-page-header-description">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
    import type { PageHeaderProps } from './PageHeader'

    defineProps<PageHeaderProps>()
</script>