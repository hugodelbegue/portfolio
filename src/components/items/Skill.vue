<template>
    <div class="skill">
        <slot name="icon"></slot>
        <div class="number__percentage">
            <span class="number">{{ number }}</span>%
        </div>
        <div class="gauge">
            <div class="filling" :style="{ 'width': number + '%' }"></div>
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
.skill {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-color: transparent;
    width: 250px;
    height: 250px;
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
    background-color: var(--divider-light-2);
    border-radius: 5px;
    width: 100%;
    height: 20px;

    .filling {
        background-color: var(--chocolate);
        border-radius: 5px;
        height: 100%;
    }
}
</style>