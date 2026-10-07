import type { Directive } from "vue";

type RevealElement = HTMLElement & { __revealObserver?: IntersectionObserver };

const REVEAL_CLASS = "reveal";
const REVEAL_VISIBLE_CLASS = "reveal-visible";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function cleanup(el: RevealElement): void {
  el.__revealObserver?.disconnect();
  el.__revealObserver = undefined;
}

export const vReveal: Directive<RevealElement> = {
  mounted(el) {
    if (prefersReducedMotion()) {
      el.classList.add(REVEAL_VISIBLE_CLASS);
      return;
    }

    el.classList.add(REVEAL_CLASS);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          el.classList.add(REVEAL_VISIBLE_CLASS);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    el.__revealObserver = observer;
  },

  unmounted(el) {
    cleanup(el);
  },
};
