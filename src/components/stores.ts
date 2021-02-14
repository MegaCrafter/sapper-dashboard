import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const darkMode: Writable<boolean> = writable(true);

export const facebookFollowers: Writable<number> = animated(1987);
export const twitterFollowers: Writable<number> = animated(1044);
export const instagramFollowers: Writable<number> = animated(11734);
export const youtubeSubs: Writable<number> = animated(8239);

export const facebookChange: Writable<number> = animated(12);
export const twitterChange: Writable<number> = animated(99);
export const instagramChange: Writable<number> = animated(1099);
export const youtubeChange: Writable<number> = animated(-144);

import anime from "animejs/lib/anime.es.js";
interface Animated<T> extends Writable<T> {
  animSubscribe(callback: (value: T) => void): () => void;
}

function animated(value: number, duration: number = 500): Writable<number> {
  const { subscribe, set, update } = writable(value);
  const nonAnimatedValue = writable(value);

  let lastValue = value;

  const animatedUpdate = (callback: (v: number) => number) => {
    const ret = callback(lastValue);
    nonAnimatedValue.set(ret);

    if (!process.browser) {
      set(ret);
      return;
    }

    // Just temporary because svelte is a dick
    let animTarget = {
      num: 0,
    };

    anime({
      targets: animTarget,
      num: [lastValue, ret],
      duration,
      round: 1,
      easing: "easeOutCirc",
      update() {
        set(animTarget.num);
      },
    });

    lastValue = ret;
  };

  const animatedSet = (value: number) => {
    animatedUpdate((_) => value);
  };

  const animSubscribe = (callback: (value: number) => void): (() => void) => {
    return nonAnimatedValue.subscribe(callback);
  };

  return {
    subscribe,
    set: animatedSet,
    update: animatedUpdate,
    animSubscribe,
  } as Animated<number>;
}
