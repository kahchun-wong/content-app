<template>
  <main class="ss-page ss-api-page">
        <ContentDoc v-slot="{ doc }">
            <article>
              <PageHeader/>
              <PageBody>
                  <ContentRenderer :value="doc" />
              </PageBody>
              <PageSurroundNav />
            </article>
        </ContentDoc>
    </main>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'api'
  })
</script>