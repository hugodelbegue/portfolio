<script setup>
import Button from './Button.vue'
import Link from './Link.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconGithub from '../icons/IconGithub.vue'
// import emailjs from '@emailjs/browser'
</script>

<template>
    <div class="form">
        <h2>Pour me&nbsp;<span class="important">contacter</span></h2>
        <form @submit.prevent="sendMail()" ref="form" method="post">
            <div class="name">
                <label for="name">
                    <input v-model="formData.name" ref="name" type="text" name="name" placeholder="Votre nom & prenom"
                        autofocus>
                </label>
            </div>
            <div class="email">
                <label for="email">
                    <input v-model="formData.email" type="email" name="email" placeholder="Votre adresse email">
                </label>
            </div>
            <div class="message">
                <textarea v-model="formData.message" name="message" id="message" cols="30" rows="10"
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
                    <a href="https://github.com/hugodelbegue" target="_blank" title="GitHub">
                        <IconGithub />
                    </a>
                </template>
                </Link>
                <Link color="#0e76a8">
                <template #icon>
                    <a href="https://fr.linkedin.com/in/hugo-delbegue/" target="_blank" title="LinkedIn">
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
                message: null
            },
            errors: []
        }
    },
    mounted() {
        this.$refs.name.focus();
    },
    methods: {
        // Send form
        sendMail() {
            const serviceId = 'service_kj8g0gs';
            const templateId = 'template_uywc7uk';
            const publicKey = 'qH3WgmDhYRov4CSQq';
            this.errors = [];
            if (!this.formData.name) {
                this.errors.push('#nom/prénom')
            }
            if (!this.formData.email) {
                this.errors.push('#email')
            }
            if (!this.formData.message) {
                this.errors.push('#demande')
            }
            if (this.errors.length === 0) {
                this.formData = { name: '', email: '', message: '' };
            } else {
                console.error(`Les champs suivants sont manquants: ${this.errors.join(', ')}`);
                return;
            }
            emailjs.sendForm(serviceId, templateId, this.$refs.form, publicKey)
                .then((res) => {
                    console.log('Success.', res.text);
                })
                .catch((err) => {
                    console.error('Erreur lors de l\'envoi.', err.text)
                })
        }
    },
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/responsive.scss';

.form {
    flex: 1 1 50%;

    h2 {
        display: flex;
        flex-wrap: wrap;

        @media #{$mobileUpScreen} {
            text-align: center;
        }
    }
}

form {
    margin-left: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;

    @media #{$tabletScreen} {
        margin-left: 0;
    }
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
    color: var(--black);

    &::placeholder {
        color: var(--color-input);
    }
}

.name {
    grid-column: 1;
    grid-row: 1;

    input {
        width: 100%;
    }

    @media #{$mobileMediumScreen} {
        grid-column: 1 / 3;
        grid-row: 1;
    }
}

.email {
    grid-column: 2 / 3;
    grid-row: 1;

    input {
        width: 100%;
    }

    @media #{$mobileMediumScreen} {
        grid-column: 1 / 3;
        grid-row: 2;
    }
}

.message {
    grid-column: 1 / 3;
    grid-row: 2;

    textarea {
        width: 100%;
        height: 25em;
        background: var(--color-background-soft);

        &:hover,
        &:focus,
        &:focus-visible {
            border: 2px dashed var(--color-button-hover);
            background: var(--color-background-focus);
        }
    }

    @media #{$mobileMediumScreen} {
        grid-row: 3;
    }
}

.errors {
    grid-column: 1 / 3;
    grid-row: 3;
    height: 1.4em;
    color: var(--color-error);

    @media #{$mobileMediumScreen} {
        grid-row: 4;
    }

    @media #{$mobileDownScreen} {
        text-align: center;
    }
}

.submit {
    grid-column: 1;
    grid-row: 4;

    @media #{$mobileMediumScreen} {
        grid-column: 1 / 3;
        grid-row: 5;
        text-align: center;
    }
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

    @media #{$mobileMediumScreen} {
        grid-column: 1 / 3;
        grid-row: 6;
        place-content: center;
    }
}
</style>