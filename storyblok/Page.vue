<template>
  <div
    v-editable="blok"
    class="container relative flex flex-row gap-x-4 mx-auto storyblok__outline tct-article"
  >
    <div class="basis-1/5"></div>
    <div class="basis-3/5">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
    <div class="basis-1/5"></div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
