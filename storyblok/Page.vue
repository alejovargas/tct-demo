<template>
  <div
    v-editable="blok"
    class="container relative mx-auto max-w-4xl -mt-[230px] storyblok__outline"
  >
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
