<script lang="ts">
import { onMount, onDestroy } from "svelte";

import anime from "animejs/lib/anime.es.js";

import { trim } from "./information";
import type { BigCardInfo } from "./information";
import Change from "./Change.svelte";

export let info: BigCardInfo;

let {type, icon, handle, followers, change} = info;

// Just temporary because svelte is a dick
let animTarget = {
    num: 0
}

let animFollowers = 0;

let animeInfo = {
    targets: animTarget,
    round: 1,
    easing: "easeOutCirc",
    update() {
        animFollowers = animTarget.num;
    }
}

let div;

const unsub = followers.subscribe(value => {
    animFollowers = value;
});

const animUnsub = followers.animSubscribe(value => {
    if (!process.browser) return;

    anime({
        targets: div,
        keyframes: [
            {translateY: -40, scale: 1.1},
            {translateY: 0, scale: 1}
        ],
        duration: 300,
        easing: "easeOutQuad"
    });
});

onDestroy(() => {
    unsub();
    animUnsub();
});

onMount(() => {
    anime({
        ...animeInfo,
        num: $followers,
        duration: 4000,
    });
});

</script>

<style lang="scss">
@import "../style/theme.scss";

.card {
    padding-top: 30px;
    padding-bottom: 20px;

    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;

    width: 280px;
    height: 270px;

    border-radius: 5px;

    overflow: hidden;

    transition: 0.3s;

    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);

    & .top-line {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;

        height: 5px;

        &::after {
            content: '';
            position: absolute;
            left: -0px;
            right: -0px;
            top: -0px;
            bottom: -0px;

            background: inherit;

            filter: blur(5px);
        }
    }

    &.facebook .top-line {
        background: $facebookColor;
    }

    &.twitter .top-line {
        background: $twitterColor;
    }

    &.instagram .top-line {
        background: $instagramColor;
    }

    &.youtube .top-line {
        background: $youtubeColor;
    }

    .handle {
        display: flex;
        justify-content: center;
        align-items: center;

        column-gap: 10px;

        .handle-icon {
            width: 25px;
        }
    }

    .number {
        font-size: 4rem;
    }

    .descriptor {
        font-weight: 400;
        letter-spacing: 5px;
        text-transform: uppercase;
        font-size: 1rem;

        margin-top: -30px;
    }

    &:hover {
        filter: brightness(95%);
        
        :global(.darkMode) & {
            filter: brightness(150%);
        }
    }
}
</style>

<div class="card {type}" bind:this={div}>
    <span class="top-line"></span>

    <div class="handle">
        <img src={icon} class="handle-icon" alt="{type} icon" />
        <p class="handle-text">{handle}</p>
    </div>

    <h1 class="number">{trim(animFollowers)}</h1>
            
    {#if type === "youtube"}
        <span class="descriptor">Subscribers</span>
    {:else}
        <span class="descriptor">Followers</span>
    {/if}

    <Change change={change} />
</div>