<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <PageHeader :title="doc.title" :description="doc.description" />
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
