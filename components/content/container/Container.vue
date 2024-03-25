<template>
    <div :class="`ss-container ss-container-${type} p-component`">
        <div class="ss-container-wrapper">
            <div class="ss-container-header">
                <span class="ss-container-icon">
                    <slot name="container-icon" >
                        <i :class="icon ? icon : defaultIcon"></i>
                    </slot>
                </span>
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