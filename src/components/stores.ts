import { writable, Writable } from 'svelte/store';

export const darkMode: Writable<boolean> = writable(true);

export const facebookFollowers: Writable<number> = writable(1987);
export const twitterFollowers: Writable<number> = writable(1044);
export const instagramFollowers: Writable<number> = writable(11734);
export const youtubeSubs: Writable<number> = writable(8239);

export const facebookChange: Writable<number> = writable(12);
export const twitterChange: Writable<number> = writable(99);
export const instagramChange: Writable<number> = writable(1099);
export const youtubeChange: Writable<number> = writable(-144);