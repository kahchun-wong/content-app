<template>
  <DocsPage v-slot="{ doc }">
    <PageHeader/>
    <PageBody>
      <ContentRenderer :value="doc" />
    </PageBody>
    <PageSurroundNav />
  </DocsPage>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'guide'
  })
</script>