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
        width: 100vw;
        height: 30vh;
        left: 0;
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
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
    }

    main {
        padding: 30px 100px;

        background-color: $lightBg;
        width: 100vw;
        height: 100vh;

        font-family: 'Inter', sans-serif;

        &.darkMode {
            background-color: $darkBg;

            h1, h2 {
                color: $darkPrimaryText;
            }

            h3, p {
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
        }
    }
</style>

<main class:darkMode={$darkMode}>
    <div class="top-overlay"></div>

    <article class="content">
        <slot></slot>
    </article>
</main>
