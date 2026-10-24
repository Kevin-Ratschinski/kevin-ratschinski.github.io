<script setup lang="ts">
const paragraphs: string[] = [
  "I’m a software engineer working across game development, practical AI, and internal tools. I enjoy turning complex requirements into software that is straightforward to use and easy to build on.",
  "When building business applications or AI integrations, I start with how people work: what slows them down, which tasks repeat, and where better tools can help. From local language models to approval workflows, I focus on solutions that fit into everyday work.",
  "Game development brings out my creative side. I enjoy turning ideas into playable experiences and building reusable foundations for new games. Across everything I build, I care about clear code, maintainability, and room to keep improving.",
];
</script>

<template>
  <section id="about" v-reveal class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-12">
    <div class="grid gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
      <div>
        <p class="font-mono text-sm text-(--color-accent)">03 | About</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">A bit about me</h2>
      </div>

      <div class="max-w-2xl space-y-4 text-gray-400 sm:text-lg">
        <p v-for="paragraph in paragraphs" v-reveal :key="paragraph">
          {{ paragraph }}
        </p>

        <p>
          <a href="mailto:kevin.ratschinski@gmail.com" class="font-medium text-(--color-accent) underline-offset-4 hover:underline"> Let's talk </a>
          about practical AI, games, or something you’d like to build.
        </p>
      </div>
    </div>
  </section>
</template>
