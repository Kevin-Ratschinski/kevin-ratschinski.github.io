<script setup lang="ts">
import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/Projects.Section.vue";
import SiteFooter from "./components/SiteFooter.vue";
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
    <ProjectsSection />
    <AboutSection />
  </main>

  <SiteFooter />
</template>

<style scoped></style>
