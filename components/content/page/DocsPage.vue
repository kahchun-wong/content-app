<template>
    <main class="ss-page ss-docs-page">
        <ContentDoc v-slot="{ doc }">
            <article>
                <slot :doc="doc"></slot>
            </article>
        </ContentDoc>
    </main>
</template>