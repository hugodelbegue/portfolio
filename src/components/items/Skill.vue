<template>
    <div class="skill">
        <slot name="icon"></slot>
        <div class="number__percentage">
            <span class="number">{{ number }}</span>%
        </div>
        <div class="gauge">
            <Transition name="animation__bounce" appear>
                <div class="filling" :style="{ 'width': number + '%' }"></div>
            </Transition>
        </div>
    </div>
    <div class="skill_horizontal">
        <slot name="text"></slot>
        <div class="content__skill">
            <slot name="icon"></slot>
            <div class="gauge">
                <Transition name="animation__bounce" appear>
                    <div class="filling" :style="{ 'width': number + '%' }"></div>
                </Transition>
            </div>
            <div class="number__percentage">
                <span class="number">{{ number }}</span>%
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    number: {
        type: String
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.skill {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-color: transparent;
    width: var(--width-skill);
    height: var(--height-skill);
}

.skill_horizontal {
    display: none;
}

@media #{$mobileUpScreen} {
    .skill {
        display: none;
    }

    .skill_horizontal {
        display: flex;
        flex-direction: column;
        place-content: center;
        background-color: transparent;
        width: var(--width-skill);
        height: calc(var(--height-skill) / 2);

        .content__skill {
            display: flex;
            gap: 1em;
            place-items: center;
            place-content: center;
        }

        .number__percentage {
            margin-top: 0;
        }

        .number {
            font-size: 1em;
        }

        .gauge {
            margin-top: 0;
        }
    }
}

.number__percentage {
    margin-top: 1.5em;
    font-size: 1.2em;
    font-weight: var(--weight-bold);
}

.number {
    font-weight: var(--weight-bold);
    font-size: 1.5em;
}

.gauge {
    margin-top: .25em;
    background-color: var(--gauge-empty);
    border-radius: 5px;
    width: 100%;
    height: 1.3em;

    .filling {
        background-color: var(--gauge-full);
        border-radius: 5px;
        height: 100%;
    }
}

// Transitions
.animation__bounce-enter-active {
    animation: bounce 1s;
}

.animation__bounce-leave-active {
    animation: bounce 1s cubic-bezier(.21, .74, .83, .51);
}

@keyframes bounce {
    0% {
        width: 0%;
    }

    50% {
        width: 100%;
        background-color: var(--sunglow);
    }

    100% {
        background-color: var(--gauge-full);
    }
}
</style>