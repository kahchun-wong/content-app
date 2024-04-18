<template>
    <main class="ss-page ss-api-page">
        <LazyContentDoc v-slot="{ doc }">
            <article>
                <slot :doc="doc"></slot>
            </article>
        </LazyContentDoc>
    </main>
</template>