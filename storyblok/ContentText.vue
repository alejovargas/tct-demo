<template>
  <div v-editable="blok" class="m-8 text-[#000]">
    <div v-html="resolvedRichText" class="prose"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });

const resolvedRichText = computed(() => renderRichText(props.blok.contentText));
</script>
