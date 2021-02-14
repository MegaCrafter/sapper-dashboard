<script lang="ts">
    import upArrowIcon from "../../static/icon-up.svg";
    import downArrowIcon from "../../static/icon-down.svg";

    import { onDestroy } from "svelte";

    import type { Writable } from "svelte/store";

    import anime from "animejs/lib/anime.es.js";

    export let change: Writable<number>;

// Just temporary because svelte is a dick
    // let animTarget = {
    //     num: 0
    // }

    // let animChange = 0;

    // const unsub = change.subscribe(value => {

    //     if (!process.browser) return;

    //     anime({
    //         targets: animTarget,
    //         num: [animChange, value],
    //         duration: 500,
    //         round: 1,
    //         easing: "easeOutCirc",
    //         update() {
    //             animChange = animTarget.num;
    //         }
    //     });
    // });

    // onDestroy(unsub);

</script>

<style lang="scss">
    @import "../style/theme.scss";

    .change {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        column-gap: 10px;
        
        &, & .text {
            color: $limegreen;
        }

        &.decrement {
            &, & .text {
                color: $brightred;
            }
        }
    }

    .text {
        font-weight: 500;
    }
</style>

<div class="change" class:decrement={$change < 0}>
    {#if $change < 0 }
        <img src={downArrowIcon} alt="Down Arrow" />
    {:else}
        <img src={upArrowIcon} alt="Up Arrow" />
    {/if}

    <span class="text">{Math.abs($change)} Today</span>
</div>