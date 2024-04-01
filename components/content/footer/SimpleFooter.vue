<template>
    <footer class="ss-footer">
        <div class="ss-footer-wrapper">
            <div class="ss-footer-start">
                <slot name="start">
                    <div class="ss-footer-copyright">
                        <span v-if="appConfig.footer.companyName">
                            Copyright © {{ new Date().getFullYear() }} {{ appConfig.footer.companyName }}
                        </span>
                        <span v-if="appConfig.footer.registrationNo">
                            Company Registration No: {{ appConfig.footer.registrationNo }}
                        </span>
                    </div>
                </slot>
            </div>

            <div class="ss-footer-center">
                <slot name="center"></slot>
            </div>

            <div class="ss-footer-end">
                <slot name="end">
                    <div class="ss-footer-links">
                        <NuxtLink v-if="appConfig.footer.email" :to="`mailto:${appConfig.footer.email}`">
                            <Button class="ss-footer-button" outlined>
                                <Icon name="material-symbols:mail" />
                            </Button>
                        </NuxtLink>
                        <NuxtLink v-if="appConfig.footer.phone" :to="`tel:${appConfig.footer.phone}`">
                            <Button class="ss-footer-button" outlined>
                                <Icon name="material-symbols:call" />
                            </Button>
                        </NuxtLink>
                        <NuxtLink v-if="appConfig.footer.website" :to="appConfig.footer.website">
                            <Button class="ss-footer-button" outlined>
                                <Icon name="mdi:web" />
                            </Button>
                        </NuxtLink>
                        </div>
                </slot>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const appConfig = useAppConfig()
</script>