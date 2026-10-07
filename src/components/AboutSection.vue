<script setup lang="ts">
const paragraphs: string[] = [
  "I am a software developer focused on building games and interactive experiences.",
  "Most of my work happens at the intersection of TypeScript, Pixi.js, and Godot - from small prototypes to complete gameplay systems.",
  "Alongside that, I run and serve open-source LLMs locally, tuning them for my own hardware and exposing them through vLLM.",
  "I care about clean, understandable code and like problems that are both technical and creative.",
];
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-12">
    <div class="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
      <div>
        <p class="font-mono text-sm text-(--color-accent)">03 — About</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A bit about me</h2>
      </div>

      <div class="max-w-2xl space-y-4 text-gray-400 sm:text-lg">
        <p v-for="paragraph in paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>

        <p>
          <a href="mailto:kevin.ratschinski@gmail.com" class="font-medium text-(--color-accent) underline-offset-4 hover:underline"> Let's talk </a>
          about games, local AI, or anything in between.
        </p>
      </div>
    </div>
  </section>
</template>
