<script setup lang="ts">
import { projects } from "../data/portfolio";
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-12">
    <p class="font-mono text-sm text-(--color-accent)">02 — Work</p>
    <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected projects</h2>

    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.href"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-(--color-accent)/40"
      >
        <div>
          <h3 class="text-lg font-semibold text-white transition-colors group-hover:text-(--color-accent)">
            {{ project.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-400">{{ project.description }}</p>
        </div>

        <ul class="mt-6 flex flex-wrap gap-2">
          <li v-for="tag in project.tags" :key="tag" class="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300">
            {{ tag }}
          </li>
        </ul>
      </a>
    </div>
  </section>
</template>
