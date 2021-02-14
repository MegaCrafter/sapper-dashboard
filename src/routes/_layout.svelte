<script lang="ts">
    import { darkMode } from "../components/stores"
</script>

<style lang="scss" global>
    @import "../style/theme.scss";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        user-select: none;
    }

    body {
        min-width: 310px;
    }

    h1, h2 {
        color: $lightPrimaryText;
    }

    h3, p {
        color: $lightSecondaryText;
    }

    .switch {
        background-color: $lightToggleColor;

        &::after {
            background-color: $lightTopBg;
        }
    }

    .top-overlay {
        position: absolute;
        height: 30vh;
        left: 0;
        right: 0;
        top: 0;

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        background-color: $lightTopBg;
    }

    .content {
        position: relative;
        z-index: 1;
    }

    .card {
        background-color: $lightCardBg;
    }

    .divider {
        background-color: $lightSecondaryText;
    }

    main {
        min-height: 100vh;
        padding: 30px 4vw;

        background-color: $lightBg;

        font-family: 'Inter', sans-serif;

        &.darkMode {
            background-color: $darkBg;

            h1, h2 {
                color: $darkPrimaryText;
            }

            h3, p, span {
                color: $darkSecondaryText;
            }

            .switch {
                background: $darkToggleColor;

                &::after {
                    background-color: $darkTopBg;
                }
            }

            .top-overlay {
                background-color: $darkTopBg !important;
            }

            .card {
                background-color: $darkCardBg;
            }

            .divider {
                background-color: $darkSecondaryText;
            }
        }
    }

    @media screen and (max-width: 1280px) {
        main {
            padding: 30px 30px;
        }

        .dashboard {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(2, auto) !important;
            gap: 20px;
        }

        .card {
            width: initial !important;
        }
    }

    @media screen and (max-width: 650px) {
        .dashboard {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(4, auto) !important;
        }

        .header {
            display: block !important;
        }

        .header .title h2 {
            font-size: 1rem !important;
        }

        .header .title p {
            font-size: 0.7rem !important;
        }

        .header .divider {
            display: block !important;
        }

        .theme-switch {
            justify-content: space-between !important;
        }
    }
</style>

<main class:darkMode={$darkMode}>
    <div class="top-overlay"></div>

    <article class="content">
        <slot></slot>
    </article>
</main>
