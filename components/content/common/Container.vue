<template>
    <div :class="`ss-container ss-container-${type} p-component`">
        <div class="ss-container-wrapper">
            <div class="ss-container-header">
                <slot name="container-icon" >
                    <Icon class="ss-container-icon" :name="icon ? icon : defaultIcon" />
                </slot>
                <span class="ss-container-title">
                    <slot name="container-title" >
                        {{ title ? title : defaultTitle }}
                    </slot>
                </span>
            </div>
            <div class="ss-container-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ContainerProps } from './types/Container'

    const props = withDefaults(defineProps<ContainerProps>(), {
        type: 'note'
    })

    const defaultIcon = computed(() => {
        return { 
            note: 'prime:info-circle',
            warning: 'prime:exclamation-circle',
            error: 'prime:times-circle'
        }[props.type]
    })
    const defaultTitle = computed(() => props.type.toUpperCase())
</script>