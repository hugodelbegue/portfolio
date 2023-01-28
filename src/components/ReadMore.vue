<template>
    <div class="readmore">
        <h3>En savoir un peu plus..</h3>
        <p>Développeur web passionné de front-end, je cherche continuellement à m'améliorer et reste ouvert à tout type
            d'opportunités. Situé dans la ville de Grenoble, une collaboration dans toute la France est possible.</p>
    </div>
</template>

<style lang="scss" scoped>
.readmore {
    border: 3px dashed var(--divider-light-2);
    border-radius: 3px;
    padding: 1em;
    margin-bottom: 1em;

    p {
        margin-top: .8em;

        &::before {
            content: open-quote;
        }

        &::after {
            content: close-quote;
        }
    }
}
</style>