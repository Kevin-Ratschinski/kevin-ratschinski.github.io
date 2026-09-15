import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

export function useTyping(words: string[], options: { typeMs?: number; holdMs?: number; deleteMs?: number } = {}): { text: Ref<string> } {
  const { typeMs = 90, holdMs = 1600, deleteMs = 45 } = options;

  const text = ref("");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const tick = (): void => {
    const word = words[wordIndex];
    if (!deleting && word) {
      charIndex++;
      text.value = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        timer = setTimeout(tick, holdMs);
        return;
      }
      timer = setTimeout(tick, typeMs);
    } else {
      if (word) {
        charIndex--;
        text.value = word?.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        timer = setTimeout(tick, deleteMs);
      }
    }
  };

  onMounted(() => {
    timer = setTimeout(tick, typeMs);
  });

  onBeforeUnmount(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });

  return { text };
}
