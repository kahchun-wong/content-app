<template>
    <div class="ss-page-surround-nav">
        <FaasNuxtLink class="ss-page-surround-nav-left" v-if="prev" :to="prev._path">
            <div class="ss-page-surround-nav-icon">
                <Icon name="prime:arrow-left" />
            </div>
            <p class="ss-page-surround-nav-title">{{ prev.title }}</p>
            <p class="ss-page-surround-nav-description">{{ prev.description }}</p>
        </FaasNuxtLink>
        <FaasNuxtLink class="ss-page-surround-nav-right" v-if="next" :to="next._path">
            <div class="ss-page-surround-nav-icon">
                <Icon name="prime:arrow-right" />
            </div>
            <p class="ss-page-surround-nav-title">{{ next.title }}</p>
            <p class="ss-page-surround-nav-description">{{ next.description }}</p>
        </FaasNuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { prev, next } = useContent()
</script>