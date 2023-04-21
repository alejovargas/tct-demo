<template>
  <header class="w-full h-[470px] bg-[#FF6E39]">
    <div class="container h-44 mx-auto flex items-center justify-between">
      <NuxtLink :to="localePath('/')">
        <img src="/logo-tct.svg" alt="The Chidrens Trust" />
      </NuxtLink>
      <nav>
        <ul class="flex space-x-8 text-lg text-orange-100">
          <li>
            <NuxtLink :to="localePath('/blog')" class="hover:text-white"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="localePath('/about')" class="hover:text-white"
              >About</NuxtLink
            >
          </li>
          <li v-for="lang in availableLocales" :key="lang">
            <NuxtLink
              :to="switchLocalePath(lang)"
              class="uppercase hover:text-white"
            >
              {{ lang }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#ffffff];
}
</style>
