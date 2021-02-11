<script lang="ts">
    import BigCard from "./BigCard.svelte";

    import type { BigCardInfo } from "./information";

    import facebookIcon from "../../static/icon-facebook.svg"
    import twitterIcon from "../../static/icon-twitter.svg"
    import instagramIcon from "../../static/icon-instagram.svg"
    import youtubeIcon from "../../static/icon-youtube.svg"

    import { facebookHandle, twitterHandle, instagramHandle, youtubeHandle } from "./information"
    import { 
        facebookFollowers, twitterFollowers, instagramFollowers, youtubeSubs, 
        facebookChange, twitterChange, instagramChange, youtubeChange 
    } from "./stores"

    const facebookInfo: BigCardInfo = {
        type: "facebook",
        icon: facebookIcon,
        handle: facebookHandle,
        followers: facebookFollowers,
        change: facebookChange
    }

    const twitterInfo: BigCardInfo = {
        type: "twitter",
        icon: twitterIcon,
        handle: twitterHandle,
        followers: twitterFollowers,
        change: twitterChange
    }

    const instagramInfo: BigCardInfo = {
        type: "instagram",
        icon: instagramIcon,
        handle: instagramHandle,
        followers: instagramFollowers,
        change: instagramChange
    }

    const youtubeInfo: BigCardInfo = {
        type: "youtube",
        icon: youtubeIcon,
        handle: youtubeHandle,
        followers: youtubeSubs,
        change: youtubeChange
    }

</script>

<style lang="scss">
    .dashboard {
        margin-top: 50px;

        display: grid;
        grid-template-columns: repeat(4, auto);
        justify-content: space-between;
        align-items: center;
    }
</style>

<div class="dashboard">
    <BigCard info={facebookInfo} />
    <BigCard info={twitterInfo} />
    <BigCard info={instagramInfo} />
    <BigCard info={youtubeInfo} />
</div>