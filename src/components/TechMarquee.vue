<script setup lang="ts">
import { techStack } from "../data/portfolio";
</script>

<template>
  <section class="relative overflow-hidden border-y border-white/5 py-6" aria-label="Tech stack">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#0a0a0a] to-transparent" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-r from-[#0a0a0a] to-transparent" aria-hidden="true"></div>

    <div class="marquee-track flex w-max gap-3">
      <span
        v-for="(item, index) in [...techStack, ...techStack]"
        :key="`${item.label}-${index}`"
        class="rounded-full border border-white/10 px-4 py-1.5 font-mono text-sm text-gray-300"
      >
        {{ item.label }}
      </span>
    </div>
  </section>
</template>

<style lang="css" scoped>
.marquee-track {
  animation: marquee 28s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
