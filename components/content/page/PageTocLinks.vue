<template>
    <ul v-if="links" class="ss-toc-links">
        <li v-for="link in links" :key="link.text">
            <FaasNuxtLink class="ss-toc-link"
                      :class="{ 'active': activeHash.includes(link.id) }" 
                      :to="`#${link.id}`"
            >
                {{ link.text }}
            </FaasNuxtLink>
            <PageTocLinks v-if="link.children && depth > 0" 
                            class="ss-toc-links children" 
                            :links="link.children" 
                            :depth="depth - 1"
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
    import type { PageTocLinksProps } from "./types/PageTocLinks"

    withDefaults(defineProps<PageTocLinksProps>(), {
        depth: 3
    })

    const activeHash: Ref<string[]> = ref([])
    const observer: Ref<IntersectionObserver | null | undefined> = ref()
    const observerOptions = reactive({
        root: null,
        threshold: 0.5
    })

    onMounted(() => {
        observer.value = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id')
                if (id) {
                    if (activeHash.value.includes(id)) {
                        activeHash.value.splice(activeHash.value.indexOf(id), 1)
                    }

                    if (entry.isIntersecting) {
                        activeHash.value.push(id)
                    }
                }
            })
        }, observerOptions)

        document
            .querySelectorAll('.ss-page h2[id], .ss-page h3[id], .ss-page h4[id], .ss-page h5[id], .ss-page h6[id]')
            .forEach((section) => observer.value?.observe(section))
    })

    onUnmounted(() => {
        observer.value?.disconnect()
    })
</script>