import type { Writable } from "svelte/store";

export const facebookHandle: string = "@nathanf";
export const twitterHandle: string = "@nathanf";
export const instagramHandle: string = "@realnathanf";
export const youtubeHandle: string = "Nathan F.";

type BigCardType = "facebook" | "twitter" | "instagram" | "youtube";
export type BigCardInfo = {type: BigCardType, icon: string, handle: string, followers: Writable<number>, change: Writable<number>}

export function trim(num: number): string {
    if (num.toString().length > 4) {
        const trimmed: number = Math.floor(num / 1000);
        return trimmed.toString() + "k";
    }

    return num.toString();
}