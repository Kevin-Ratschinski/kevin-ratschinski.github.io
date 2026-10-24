<script setup lang="ts">
import { techStack } from "../data/portfolio";
</script>

<template>
  <section class="tech-marquee relative overflow-hidden border-y border-white/5 py-8" aria-label="Tech stack">
    <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#0a0a0a] to-transparent" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#0a0a0a] to-transparent" aria-hidden="true"></div>

    <div class="marquee-track flex w-max">
      <div
        v-for="copy in 2"
        :key="copy"
        class="flex shrink-0 gap-4 pr-4"
        :aria-hidden="copy === 2 ? true : undefined"
      >
        <span
          v-for="item in techStack"
          :key="item.label"
          class="tech-label rounded-full border border-white/8 bg-white/3 px-5 py-2 font-mono text-sm text-gray-300"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.marquee-track {
  animation: marquee 36s linear infinite;
}

.tech-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.tech-label {
  transition: transform 200ms ease, color 200ms ease, border-color 200ms ease,
    background-color 200ms ease, box-shadow 200ms ease;
}

@media (hover: hover) {
  .tech-label:hover {
    transform: translateY(-2px);
    color: #fff;
    border-color: color-mix(in srgb, var(--color-accent) 35%, transparent);
    background-color: rgb(255 255 255 / 6%);
    box-shadow: 0 0 16px color-mix(in srgb, var(--color-accent) 10%, transparent);
  }
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

  .tech-label {
    transition: none;
  }

  .tech-label:hover {
    transform: none;
  }
}
</style>
