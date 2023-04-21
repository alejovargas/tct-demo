<template>
  <div
    v-editable="blok"
    class="container relative mx-auto max-w-2xl -mt-[230px] storyblok__outline tct-article"
  >
    <img
      v-if="blok.image?.filename"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="rounded-[10px] w-full object-cover -mt-[100px]"
    />
    <div class="container mx-auto mb-12">
      <h4 class="text-xs leading-9 pl-11 my-8 tct-circle">
        Written by Priscilla Greear
      </h4>
      <h1 class="text-5xl font-light mb-10">
        {{ blok.title }}
      </h1>
      <div v-html="resolvedTeaser" class="prose mb-5"></div>
      <div v-html="resolvedRichText" class="prose"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const resolvedTeaser = computed(() => renderRichText(props.blok.teaser));
const resolvedRichText = computed(() => renderRichText(props.blok.content));
</script>
