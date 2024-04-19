
<template>
    <div class="ss-link-card">
        <FaasNuxtLink class="ss-link-card-link" :to="link">
            <Card>
                <template #header>
                    <Icon v-if="icon" class="ss-link-card-icon" :name="icon" />
                </template>
                <template #title>
                    <p v-if="title" class="ss-link-card-title">{{ title }}</p>
                </template>

                <template #content>
                    <p v-if="description" class="ss-link-card-description">{{ description }}</p>
                </template>
            </Card>
        </FaasNuxtLink>
    </div>
</template>

<script setup lang="ts">
    import type { LinkCardProps } from './types/LinkCard'

    const props = defineProps<LinkCardProps>()

    const { data } = await useAsyncData('link-card' + props.link, () => queryContent().where({ _path: { $eq: props.link } }).findOne())
    const icon = props.icon?? data.value?.icon
    const title = props.title?? data.value?.title
    const description = props.description?? data.value?.description
</script>