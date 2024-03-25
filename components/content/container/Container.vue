<template>
    <div :class="`ss-container ss-container-${type} p-component`">
        <div class="ss-container-wrapper">
            <p class="ss-container-header">
                <slot name="container-icon" class="ss-container-icon">
                    <i :class="icon ? icon : defaultIcon"></i>
                </slot>
                <slot name="container-title" class="ss-container-title">
                    <span>{{ title ? title : defaultTitle }}</span>
                </slot>
            </p>
            <slot class="ss-container-content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ContainerProps } from './Container'

    const props = withDefaults(defineProps<ContainerProps>(), {
        type: 'note'
    })

    const defaultIcon = computed(() => {
        return { 
            note: 'pi pi-info-circle',
            warning: 'pi pi-exclamation-circle',
            error: 'pi pi-times-circle'
        }[props.type]
    })
    const defaultTitle = computed(() => props.type.toUpperCase())
</script>