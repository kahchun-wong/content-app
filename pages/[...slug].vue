<template>
  <DocsPage v-slot="{ doc }">
    <PageHeader :title="doc.title" :description="doc.description" />
    <PageBody>
      <ContentRenderer :value="doc" />
    </PageBody>
  </DocsPage>
</template>
