<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import SiteHeader from "./components/SiteHeader.vue";
import StrengthsSection from "./components/StrengthsSection.vue";
import TechMarquee from "./components/TechMarquee.vue";
</script>

<template>
  <SiteHeader />

  <main>
    <HeroSection />
    <TechMarquee />
    <StrengthsSection />
  </main>
</template>

<style scoped></style>
