<template>
    <Tag 
        class="ss-http-method-tag"
        :class="httpMethod"
        :value="httpMethod"
        severity="secondary"
    />
</template>

<script setup lang="ts">
    import type { HttpMethodTagProps} from './types/HttpMethodTag'

    defineProps<HttpMethodTagProps>()
</script>