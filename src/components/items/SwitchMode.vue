<template>
    <div ref="switchmode" class="switchmode">
        <input ref="switchInput" @change="swicthButton" type="checkbox" class="checkbox" id="switch" :checked="checked">
        <label for="switch" class="label">
            <div class="ball"></div>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    },
    mounted() {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('theme__dark', prefersDark);
        document.body.classList.toggle('theme__light', !prefersDark);
        this.checked = prefersDark;
    },
    methods: {
        // Dark mode
        swicthButton() {
            const { switchInput } = this.$refs;
            if (switchInput.checked) {
                this.checked = true;
                document.body.classList.add('theme__dark');
                document.body.classList.remove('theme__light');
            } else {
                this.checked = false;
                document.body.classList.remove('theme__dark');
                document.body.classList.add('theme__light');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.checkbox {
    display: none;
}

.label {
    cursor: pointer;
    position: relative;
    background: transparent;
    padding: .4rem;
    border-radius: 15px;
    box-shadow: 0 0 3px 2px var(--color-ball-light);
    height: 15px;
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background .15s;

    &::before {
        content: url(@/assets/img/designs/moon-fill.svg);
        position: relative;
        top: 2px;
        right: 4px;
    }

    &::after {
        content: url(@/assets/img/designs/brightness-low-fill.svg);
        position: relative;
        top: 3px;
        left: 6px;
    }
}

.ball {
    z-index: 1;
    position: absolute;
    left: 0px;
    background: var(--color-ball-light);
    height: 17px;
    width: 25px;
    box-shadow: 1px 0.5px 2px;
    border-radius: 17px;
    transform: translateX(0px) scale(1.1);
    transition: transform .15s cubic-bezier(.88, .64, .67, 1.49);
}

.checkbox:checked+.label .ball {
    transform: translateX(25px) scale(1.1);
}

.theme__dark .label {
    box-shadow: 0 0 3px 2px var(--color-ball-dark);
}

.theme__dark .ball {
    background: var(--color-ball-dark);
    box-shadow: -1px 0.5px 2px;
}
</style>