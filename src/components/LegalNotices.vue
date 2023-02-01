<script setup>
import IconFingerprint from './icons/IconFingerprint.vue'
</script>

<template>
    <div class="legalnotices">
        <div class="copyright">
            <p>© Copyright 2023 - Hugo DELBEGUE | <a href="">Mentions Légales</a> | <a
                    href="https://www.infomaniak.com/fr/ecologie">Hébergé par Infomaniak</a>.
                <i>
                    <IconFingerprint />
                </i>
                Site hébergé de manière écologique, afin d'atténuer son impact sur l'environnement.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.legalnotices {
    font-size: .8em;

    p {
        text-align: justify;
    }
}

svg {
    width: 1em;
    height: 1em;
}
</style>