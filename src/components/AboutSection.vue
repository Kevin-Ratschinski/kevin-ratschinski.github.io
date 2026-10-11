<script setup lang="ts">
const paragraphs: string[] = [
  "I am a software engineer with a focus on integrating AI into business processes and developing games and interactive experiences.",
  "My AI work starts with the workflow: where can AI reduce repetitive work, and how can it fit into the tools people already use? I build integrations around those needs.",
  "I also work with local, open-source language models, adapting their setup to the available hardware and serving them.",
  "On the creative side, I use TypeScript, Python, Pixi.js, and Godot to turn ideas into playable experiences. Across both areas, I value clear code and software that is easy to maintain.",
];
</script>

<template>
  <section id="about" v-reveal class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-12">
    <div class="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
      <div>
        <p class="font-mono text-sm text-(--color-accent)">03 — About</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A bit about me</h2>
      </div>

      <div class="max-w-2xl space-y-4 text-gray-400 sm:text-lg">
        <p v-for="paragraph in paragraphs" v-reveal :key="paragraph">
          {{ paragraph }}
        </p>

        <p>
          <a href="mailto:kevin.ratschinski@gmail.com" class="font-medium text-(--color-accent) underline-offset-4 hover:underline"> Let's talk </a>
          about Software, practical AI, and ideas worth building.
        </p>
      </div>
    </div>
  </section>
</template>
