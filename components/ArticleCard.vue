<template>
  <NuxtLink
    :to="localePath(`/${slug}`)"
    v-editable="article"
    class="w-full h-full drop-shadow-2xl"
  >
<<<<<<< HEAD
    <img
      :src="article.image.filename + '/m/600x0'"
      :alt="article.image.alt"
      class="w-full h-48 xl:h-72 object-cover pointer-events-none"
    />
    <div class="p-4">
      <h3 class="text-xl text-[#1d243d] font-bold mb-3">
        {{ article.title }}
      </h3>
      <div class="line-clamp-4">
        {{ article.subtitle }}
=======
    <div class="h-full text-center rounded-[5px] bg-[#fff] overflow-hidden">
      <img
        :src="article.image.filename + '/m/600x0'"
        :alt="article.image.alt"
        class="w-full object-cover pointer-events-none"
      />
      <div class="p-4">
        <h3 class="text-xl text-[#1d243d] font-bold mb-3">
          {{ article.title }}
        </h3>
        <div class="line-clamp-4">
          {{ article.subtitle }}
        </div>
>>>>>>> 1643562262e9bbc7436fe416b25fc701be201c0c
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({ article: Object, slug: String });

const localePath = useLocalePath();
</script>
