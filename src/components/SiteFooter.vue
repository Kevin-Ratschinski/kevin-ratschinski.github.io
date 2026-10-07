<script setup lang="ts">
import { socials } from "../data/portfolio";

const email = "kevin.ratschinski@gmail.com";
const year = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="mt-12 scroll-mt-20 border-t border-white/5">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:px-12">
      <div>
        <p class="font-mono text-sm text-(--color-accent)">04 — Contact</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's build something</h2>
        <a
          :href="`mailto:${email}`"
          class="mt-4 inline-block font-mono text-lg text-gray-300 underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline"
        >
          {{ email }}
        </a>
      </div>

      <div class="flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Kevin Ratschinski</p>

        <ul class="flex gap-6">
          <li v-for="social in socials" :key="social.label">
            <a :href="social.href" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-(--color-accent)">
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
