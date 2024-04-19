<template>
    <div class="ss-empty">
        <div class="ss-empty-title">Oops!</div>
        <div class="ss-empty-subtitle">There's nothing here</div>
        <div class="ss-empty-description">Sorry, we couldn't find anything in this page.</div>
        <div class="ss-empty-buttons">
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