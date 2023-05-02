<template>
  <NuxtLink
    v-editable="blok"
    :to="blok.link.filename"
    target="_blank"
    class="mx-8 px-6 py-3 rounded-full text-xl text-[#fff] bg-[#FF6E39] leading-10 font-bold text-center"
  >
    {{ blok.text }}
  </NuxtLink>
</template>

<script setup>
defineProps({ blok: Object });
</script>
