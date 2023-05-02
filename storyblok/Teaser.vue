<template>
  <div
    v-editable="blok"
    class="mb-24 text-3xl text-[#fff] leading-10 font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
