
<template>
    <nav class="ss-sidebar">       
        <PanelMenu :model="items" class="w-full md:w-20rem" :multiple="true">
            <template #item="{ item }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple class="flex align-items-center cursor-pointer text-color px-3 py-2" :href="href" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2 text-color">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex align-items-center cursor-pointer text-color px-3 py-2" :href="item.url" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
                </a>
            </template>
        </PanelMenu>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router',
        items: [
            {
                label: 'Styled',
                route: '/theming'
            },
            {
                label: 'Unstyled',
                route: '/unstyled'
            }
        ]
    },
    {
        label: 'Programmatic',
        command: () => {
            router.push('/introduction');
        }
    },
    {
        label: 'External',
        items: [
            {
                label: 'Vue.js',
                icon: 'pi pi-star',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Vite.js',
                icon: 'pi pi-bookmark',
                url: 'https://vuejs.org/'
            }
        ]
    }
]);
</script>
