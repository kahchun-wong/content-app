<template>
    <div class="ss-not-found">
        <div class="ss-not-found-title">404</div>
        <div class="ss-not-found-subtitle">Page Not Found</div>
        <div class="ss-not-found-description">Sorry, we couldn't find the page.</div>
        <div class="ss-not-found-buttons">
            <Button label="Back" outlined @click="goBack" />
            <Button label="Home" @click="goHome" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const router = useRouter()

    const goHome = () => {
        router.push(useRuntimeConfig().app.baseURL)
    }

    const goBack = () => {
        router.back()
    }
</script>