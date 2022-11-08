<script setup>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
</script>

<template>
  <Header />

  <main class="main">
    <RouterView />
  </main>

  <Footer />
</template>
