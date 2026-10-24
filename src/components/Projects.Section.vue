<script setup lang="ts">
import { projects } from "../data/portfolio";
</script>

<template>
  <section id="projects" v-reveal class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-12">
    <p class="font-mono text-sm text-(--color-accent)">02 — Work</p>
    <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>

    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <component
        :is="project.linkEnabled ? 'a' : 'article'"
        v-for="project in projects"
        v-reveal
        :key="project.title"
        :href="project.linkEnabled ? project.href : undefined"
        :target="project.linkEnabled ? '_blank' : undefined"
        :rel="project.linkEnabled ? 'noopener noreferrer' : undefined"
        class="flex flex-col justify-between rounded-xl border border-white/10 bg-white/2 p-6"
        :class="project.linkEnabled ? 'group transition-colors hover:border-(--color-accent)/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)' : ''"
      >
        <div>
          <h3 class="text-lg font-semibold text-white transition-colors group-hover:text-(--color-accent)">
            {{ project.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-400">{{ project.description }}</p>
        </div>

        <ul class="mt-6 flex flex-wrap gap-2">
          <li v-for="tag in project.tags" :key="tag" class="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300">
            {{ tag }}
          </li>
        </ul>
      </component>
    </div>
  </section>
</template>
