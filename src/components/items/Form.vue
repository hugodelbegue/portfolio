<script setup>
import Button from './Button.vue'
</script>

<template>
    <div class="form">
        <form action="">
            <div class="name">
                <label for="name">
                    <input type="text" placeholder="Votre nom & prenom" autofocus>
                </label>
            </div>
            <div class="mail">
                <label for="mail">
                    <input type="text" placeholder="Votre adresse mail">
                </label>
            </div>
            <div class="request">
                <textarea name="request" id="request" cols="30" rows="10"
                    placeholder="Ecrivez votre demande"></textarea>
            </div>
            <div class="submit">
                <Button />
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
}

input,
textarea {
    padding: 1em;
    font-family: var(--family);
    letter-spacing: var(--spacing);

    &::placeholder {
        font-variant-caps: small-caps;
    }

    &:hover {
        cursor: pointer;
    }

    &:focus,
    &:focus-visible {
        outline: transparent;
    }
}

input[type="text"] {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
}

.name {
    grid-column: 1;
    grid-row: 1;

    input {
        width: 100%;
    }
}

.mail {
    grid-column: 2 / 3;
    grid-row: 1;

    input {
        width: 100%;
    }
}

.request {
    grid-column: 1 / 3;
    grid-row: 2;

    textarea {
        width: 100%;
        height: 100%;
        background: var(--white-soft);

        &:hover,
        &:focus,
        &:focus-visible {
            border: 2px dashed var(--chocolate);
        }
    }
}

.submit {
    grid-column: 1 / 3;
    grid-row: 3;
}
</style>