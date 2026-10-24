<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { socials } from "../data/portfolio";

const email = "kevin.ratschinski@gmail.com";
const year = new Date().getFullYear();
const linkedIn = socials.find((social) => social.label === "LinkedIn");
const copyStatus = ref("");
const isCopying = ref(false);
let resetCopyStatus: ReturnType<typeof setTimeout> | undefined;

async function copyEmail() {
  if (isCopying.value) return;
  isCopying.value = true;
  clearTimeout(resetCopyStatus);
  copyStatus.value = "";

  try {
    await navigator.clipboard.writeText(email);
    copyStatus.value = "Copied!";
  } catch {
    copyStatus.value = "Couldn't copy. Please select the email address to copy it.";
  } finally {
    isCopying.value = false;
    resetCopyStatus = setTimeout(() => { copyStatus.value = ""; }, 6000);
  }
}

onBeforeUnmount(() => clearTimeout(resetCopyStatus));
</script>

<template>
  <footer id="contact" class="relative isolate mt-12 scroll-mt-20 border-t border-white/5">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.08),transparent_60%)]" aria-hidden="true"></div>
    <div class="mx-auto max-w-6xl px-6 sm:px-12">
      <section aria-labelledby="contact-heading" class="py-20 sm:py-28">
        <p class="font-mono text-sm text-(--color-accent)">04 | Contact</p>
        <h2 id="contact-heading" class="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Let's build something</h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
          Have a project in mind or want to talk tech? I'd love to hear from you.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a :href="`mailto:${email}`" class="inline-flex min-h-11 items-center gap-3 rounded-md bg-(--color-accent) px-5 py-3 font-medium text-black transition-opacity hover:opacity-80">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <a v-if="linkedIn" :href="linkedIn.href" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 rounded-sm text-gray-300 underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline">
            Connect on LinkedIn <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a :href="`mailto:${email}`" class="min-w-0 max-w-full rounded-sm break-all font-mono text-base text-gray-300 underline-offset-4 transition-colors hover:text-(--color-accent) hover:underline sm:text-lg">
            {{ email }}
          </a>
          <button type="button" :disabled="isCopying" aria-label="Copy email address" class="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-3 text-sm text-gray-300 transition-colors hover:border-(--color-accent) hover:text-(--color-accent) disabled:opacity-50" @click="copyEmail">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
            {{ copyStatus === "Copied!" ? "Copied!" : "Copy" }}
          </button>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" class="mt-2 min-h-5 text-sm text-gray-300">{{ copyStatus }}</p>
      </section>

      <div class="flex flex-col gap-4 border-t border-white/5 py-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Kevin Ratschinski</p>

        <ul class="flex flex-wrap gap-6">
          <li v-for="social in socials" :key="social.label">
            <a :href="social.href" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-(--color-accent)">
              {{ social.label }}<span class="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 5px;
}
</style>
