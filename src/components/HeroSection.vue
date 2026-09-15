<script setup lang="ts">
import { tagline, typingWords } from "../data/portfolio";
import { useTyping } from "../composables/useTyping";

const { text } = useTyping(typingWords);
</script>

<template>
  <section id="hero" class="relative flex min-h-[70vh] flex-col items-start justify-center gap-6 px-6 py-24 sm:px-12">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" aria-hidden="true"></div>
    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Kevin Ratschinski</h1>
    <p class="max-w-2xl text-lg text-gray-300 sm:text-xl">
      {{ tagline }}
    </p>
    <p class="font-mono text-lg text-(--color-accent)" aria-live="polite">
      <span class="text-gray-500">&gt;</span> {{ text }}<span class="animate-pulse">_</span>
    </p>
    <div class="mt-4 flex gap-4">
      <a href="#projects" class="rounded-md bg-(--color-accent) px-5 py-2.5 font-medium text-black transition-opacity hover:opacity-80"> View Projects </a>
      <a
        href="mailto:kevin.ratschinski@gmail.com"
        class="rounded-md border border-gray-700 px-5 py-2.5 font-medium text-gray-200 transition-colors hover:border-(--color-accent)"
      >
        Contact
      </a>
    </div>
  </section>
</template>
