<template>
  <div class="">
    <h2 class="text-6xl text-[#ff6e39] font-bold text-center mb-12">
      {{ blok.title }}
    </h2>
    <div class="grid md:grid-cols-3 gap-6 mb-12 place-items-start">
      <ArticleCard
        v-for="article in articles"
        :key="article.uid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const { locale } = useI18n();
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  language: locale.value,
  starts_with: "blog",
  is_startpage: false,
});
const articles = ref(data.stories);
</script>
