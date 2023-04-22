<template>
  <div
    v-editable="blok"
    class="my-24 text-3xl text-[#00000] leading-10 font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
