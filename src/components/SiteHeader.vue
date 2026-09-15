<script setup lang="ts">
const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-12" aria-label="Main navigation">
      <a href="#hero" class="font-mono text-sm font-semibold tracking-tight text-white transition-colors hover:text-(--color-accent)">
        kevin-ratschinski<span class="text-(--color-accent)">.</span>
      </a>

      <ul class="flex items-center gap-1 text-sm text-gray-300 sm:gap-2">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="rounded-md px-3 py-2 transition-colors hover:text-white">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
