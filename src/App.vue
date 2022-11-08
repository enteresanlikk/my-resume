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

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  background-color: $white;
}

* {
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: "Arial", sans-serif;
  color: $black;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

a {
  color: $black;

  &:hover {
    text-decoration: none;
  }
}

.list-unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.text-center {
  text-align: center;
}

section {
  .title {
    margin-bottom: 20px;

    &::after {
      content: "";
      display: block;
      max-width: 40%;
      width: 100%;
      height: 1px;
      background-color: $black;
      margin-top: 20px;
    }
  }
}
</style>
