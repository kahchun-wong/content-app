<template>
    <div class="ss-page-surround-nav">
        <NuxtLink class="ss-page-surround-nav-left" v-if="prev" :to="prev._path">
            <div class="ss-page-surround-nav-icon">
                <i class="pi pi-arrow-left" />
            </div>
            <p class="ss-page-surround-nav-title">{{ prev.title }}</p>
            <p class="ss-page-surround-nav-description">{{ prev.description }}</p>
        </NuxtLink>
        <NuxtLink class="ss-page-surround-nav-right" v-if="next" :to="next._path">
            <div class="ss-page-surround-nav-icon">
                <i class="pi pi-arrow-right" />
            </div>
            <p class="ss-page-surround-nav-title">{{ next.title }}</p>
            <p class="ss-page-surround-nav-description">{{ next.description }}</p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { prev, next } = useContent()
</script>