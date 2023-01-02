<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Certificates from "@/components/Resume/Certificate/CertificateList.vue";

const store = useStore();

const certificates = computed(() => store.getters["resume/getCertificates"]);
</script>

<template>
  <section class="certificates">
    <div class="container">
      <h1 class="title">Certificates</h1>

      <Certificates :items="certificates" />
    </div>
  </section>
</template>
