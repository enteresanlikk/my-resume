<script setup>
import { defineProps } from "vue";

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="profile">
    <div class="profile--image--container" v-if="profile.image">
      <img :src="profile.image" alt="Profile image" class="profile--image" />
    </div>

    <h1 class="profile--name" v-if="profile.name" v-html="profile.name"></h1>
    <span
      class="profile--title"
      v-if="profile.title"
      v-html="profile.title"
    ></span>
    <p
      class="profile--description text-center"
      v-if="profile.bio"
      v-html="profile.bio"
    ></p>

    <p class="profile--social-medias">
      <a
        v-for="socialMedia in profile.socialMedias"
        :key="socialMedia.name"
        :href="socialMedia.link"
        target="_blank"
        class="profile--social-media"
      >
        <span class="profile--social-media--name">
          {{ socialMedia.name }}
        </span>
      </a>
    </p>
  </section>
</template>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &--image--container {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &--social-medias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
