<template>
  <div class="py-10">
    <h2 class="text-5xl text-[#ff6e39] font-bold text-center mb-12">
      {{ blok.headline }}
    </h2>
    <div
      class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start"
    >
      <ArticleCard
        v-for="article in blok.articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
