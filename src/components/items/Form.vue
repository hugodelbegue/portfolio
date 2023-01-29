<script setup>
import Button from './Button.vue'
import Link from './Link.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconGithub from '../icons/IconGithub.vue'
</script>

<template>
    <div class="form">
        <h2>Pour me contacter.</h2>
        <form @submit.prevent="sendMail()" method="post">
            <div class="name">
                <label for="name">
                    <input v-model="formData.name" type="text" placeholder="Votre nom & prenom" autofocus>
                </label>
            </div>
            <div class="email">
                <label for="email">
                    <input v-model="formData.email" type="email" placeholder="Votre adresse email">
                </label>
            </div>
            <div class="request">
                <textarea v-model="formData.request" name="request" id="request" cols="30" rows="10"
                    placeholder="Ecrivez votre demande.."></textarea>
            </div>
            <div class="submit">
                <Button type="submit" padding="1" width="50" msg="Envoyer" />
            </div>
            <div class="errors">
                <div v-if="errors.length">
                    <span v-for="error in errors">{{ error }}&emsp;</span>
                </div>
            </div>
            <div class="social">
                <Link color="#000000">
                <template #icon>
                    <a href="https://github.com/hugodelbegue" target="_blank">
                        <IconGithub />
                    </a>
                </template>
                </Link>
                <Link color="#0e76a8">
                <template #icon>
                    <a href="https://fr.linkedin.com/in/hugo-delbegue/" target="_blank">
                        <IconLinkedin />
                    </a>
                </template>
                </Link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: null,
                email: null,
                request: null
            },
            errors: []
        }
    },
    methods: {
        // Send form
        sendMail() {
            this.errors = [];
            if (!this.formData.name) {
                this.errors.push('#nom/prénom')
            }
            if (!this.formData.email) {
                this.errors.push('#email')
            }
            if (!this.formData.request) {
                this.errors.push('#demande')
            }
            if (this.errors.length == 0) {
                alert('Erreurs OK')
                alert('envoi OK')
                this.formData.name = '';
                this.formData.email = '';
                this.formData.request = '';
                this.errors = [];
                alert('Reset OK')
            }
            console.log('Erreur ' + this.errors)
            console.log('Formulaire ' + this.formData)
        }
    },
}

</script>

<style lang="scss" scoped>
.form {
    flex: 1 1 50%;
}

form {
    margin-left: 2em;
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
}

input[type="text"],
input[type="email"] {
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

.email {
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
        height: 25em;
        background: var(--white-soft);

        &:hover,
        &:focus,
        &:focus-visible {
            border: 2px dashed var(--chocolate);
            background: var(--white);
        }
    }
}

.errors {
    grid-column: 1 / 3;
    grid-row: 3;
    height: 1.4em;
    color: var(--harvard-crimson);
}

.submit {
    grid-column: 1;
    grid-row: 4;
}

.social {
    grid-column: 2 / 3;
    grid-row: 4;
    display: flex;
    place-content: flex-end;
    place-items: center;
    column-gap: 1em;

    a:hover {
        color: inherit;
    }

    svg {
        width: 27px;
        height: 27px;
    }
}
</style>