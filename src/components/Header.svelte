<script lang="ts">
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import { facebookFollowers, twitterFollowers, instagramFollowers, youtubeSubs } from "./stores";

    let totalFollowers: number;
    $: totalFollowers = $facebookFollowers + $twitterFollowers + $instagramFollowers + $youtubeSubs;

</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: 600;
        
        h2 {
            font-weight: 700;
            font-size: 2rem;
        }

        p {
            font-size: 14px;
        }

        .divider {
            display: none;

            width: 100%;
            height: 1px;

            margin-top: 10px;
            margin-bottom: 8px;

            filter: blur(1px);
        }
    }
</style>

<div class="header">
    <div class="title">
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: {totalFollowers.toLocaleString('en-US')}</p>
    </div>
    <div class="divider"></div>
    <ThemeSwitch />
</div>