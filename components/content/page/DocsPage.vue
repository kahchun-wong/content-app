<template>
    <main class="ss-page ss-docs-page">
        <ContentDoc>
            <template #default="{ doc }">
                <article>
                    <slot :doc="doc"></slot>
                </article>
            </template>
            <template #not-found>
                <NotFound />
            </template>
            <template #empty>
                <Empty />
            </template>
        </ContentDoc>
    </main>
</template>