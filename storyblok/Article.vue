<template>
  <div
    class="container relative flex flex-row gap-x-4 mx-auto storyblok__outline tct-article"
  >
    <div class="basis-1/5 text-white mt-20 text-[12px] font-light">
      Parents & Caregivers | Parenting Articles
    </div>
    <div v-editable="blok" class="basis-3/5">
      <img
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="rounded-[10px] w-full object-cover"
      />
      <div class="container mx-auto mb-12">
        <h4 class="text-xs leading-9 pl-11 my-8 tct-circle" v-if="blok.author">
          <span>{{ blok.prefix }}</span> {{ blok.author }}
        </h4>
        <h1 class="text-3xl font-light mt-8 mb-10">
          {{ blok.title }}
        </h1>
        <div v-html="resolvedTeaser" class="prose mb-5"></div>
        <div v-html="resolvedRichText" class="prose"></div>
      </div>
    </div>
    <div class="basis-1/5 mt-20">
      <div class="basis-1/5 flex flex-row-reverse gap-2 pt-5 mt-10">
        <img src="/share.svg" alt="share" />
        <img src="/share_fb.svg" alt="share facebook" />
        <img src="/share_instagram.svg" alt="share instagram" />
        <img src="/share_email.svg" alt="share email" />
        <span class="text-[#ff6e39] text-[12px] font-light leading-10"
          >SHARE</span
        >
      </div>
      <h3 class="mt-96 text-2xl font-light mb-6">Related Articles</h3>
      <!-- <pre class="text-xs">{{ blok.image.filename }}</pre> -->
      <div class="grid gap-6">
        <RelatedArticle
          v-for="article in articles"
          :key="article.uid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const resolvedTeaser = computed(() => renderRichText(props.blok.teaser));
const resolvedRichText = computed(() => renderRichText(props.blok.content));

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
