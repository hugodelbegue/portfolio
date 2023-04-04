<template>
    <div class="switch">
        <input ref="switchInput" @change="swicthButton" type="checkbox" class="checkbox" id="toggle" :checked="checked">
        <label for="toggle" class="label">
            <div ref="ball" id="ball" class="ball" :style="{ '--display': display }"></div>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
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
@import '@/assets/scss/responsive.scss';

.checkbox {
    display: none;
}

.label {
    cursor: pointer;
    position: relative;
    background: transparent;
    border-radius: 15px;
    box-shadow: 0 0 3px 2px var(--color-ball-light);
    margin-right: 3px;
    height: 2px;
    width: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background .15s box-shadow .15s;
    background: var(--color-ball-light);
}

.ball {
    z-index: 1;
    position: absolute;
    left: 0;
    background: var(--color-ball-light);
    height: 20px;
    width: 20px;
    box-shadow: 1px 0.5px 2px var(--color-border-1);
    border-radius: 20px;
    transform: translateX(-5px) scale(1.1);
    transition: transform .15s cubic-bezier(.88, .64, .67, 1.49);

    &::before {
        content: url(@/assets/img/designs/moon.svg);
        height: 14px;
        position: absolute;
        line-height: 0;
        bottom: 3px;
        left: 3px;
        display: var(--display-moon);
        font-weight: bold;
    }

    &::after {
        content: url(@/assets/img/designs/sun.svg);
        height: 14px;
        position: absolute;
        line-height: 0;
        top: 3px;
        left: 3px;
        display: var(--display-sun);
    }
}

.checkbox:checked+.label .ball {
    transform: translateX(25px) scale(1.1);
}

.theme__dark .label {
    box-shadow: 0 0 3px 2px var(--color-ball-dark);
    background: var(--color-ball-dark);
}

.theme__dark .ball {
    background: var(--color-ball-dark);
    box-shadow: -1px 0.5px 2px var(--color-border-1);
}
</style>