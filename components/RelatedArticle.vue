<template>
  <NuxtLink
    :to="localePath(`/${slug}`)"
    v-editable="article"
    class="w-full h-full"
  >
    <div class="h-full rounded-[5px] bg-[#fff] overflow-hidden">
      <img
        :src="article.image.filename + '/m/600x0'"
        :alt="article.image.alt"
        class="w-full object-cover pointer-events-none"
      />
      <div class="p-3">
        <h3 class="text-lg leading-5 text-[#222222] mb-4 text-left font-bold">
          {{ article.title }}
        </h3>
        <!-- <pre class="text-xs">{{ article.image.filename }}</pre> -->
        <div class="text-right text-[#FF6E39]">Read more +</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({ article: Object, slug: String });

const localePath = useLocalePath();
</script>
