<script lang="ts">
    import { darkMode } from "./stores.js"

    const toggleSwitch = () => {
        darkMode.set(!$darkMode);
    }
</script>

<style lang="scss">
    .theme-switch {
        display: flex;

        justify-content: flex-end;
        align-items: center;
    }

    .switch-label {
        margin-right: 10px;

        font-size: 14px;
    }
    
    #darkMode {
        display: none;
    }

    .switch {
        cursor: pointer;

        position: relative;

        width: 45px;
        height: 24px;
        border-radius: 12px;

        display: inline-block;

        transition: 0.3s;

        &::after {
            content: '';

            width: 18px;
            height: 18px;
            border-radius: 9px;

            position: absolute;
            left: 3px;
            top: 3px;

            transition: 0.3s;

            input:checked + & {
                left: 24px;
            }
        }

        &:hover {
            filter: brightness(95%);
            
            :global(.darkMode) & {
                filter: brightness(150%);
            }
        }
    }
</style>

<div class="theme-switch">
    <p class="switch-label">Dark Mode</p>
    <input type="checkbox" id="darkMode" on:change={toggleSwitch}/>
    <label for="darkMode" class="switch"/>
</div>