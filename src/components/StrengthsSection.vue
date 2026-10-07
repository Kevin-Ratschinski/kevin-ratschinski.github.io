<script setup lang="ts">
import { strengths } from "../data/portfolio";
</script>

<template>
  <section id="strengths" v-reveal class="mx-auto max-w-6xl px-6 py-24 sm:px-12">
    <p class="font-mono text-sm text-(--color-accent)">01 — Focus</p>
    <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">What I do</h2>

    <div class="mt-12 grid gap-6 sm:grid-cols-2">
      <article
        v-for="strength in strengths"
        v-reveal
        :key="strength.title"
        class="group rounded-xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-(--color-accent)/40"
      >
        <h3 class="text-xl font-semibold text-white">{{ strength.title }}</h3>
        <p class="mt-3 text-gray-400">{{ strength.description }}</p>

        <ul class="mt-6 flex flex-wrap gap-2">
          <li v-for="tag in strength.tags" :key="tag" class="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300">
            {{ tag }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
