<template>
    <a ref="download" id="download" :class="offset" :href="downloadUrl('CV_HugoDELBEGUE.pdf')" target="_blank"
        rel="noreferrer" download="CV_hugodelbegue" title="Téléchagement CV pdf">
        <Link class="downloadCV" :class="classDownload">
        <template #title>
            <span ref="cv">CV</span>
        </template>
        <template #icon>
            <IconDownload />
        </template>
        </Link>
    </a>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
#download {
    @media #{$mobileMenuHidden} {
        display: none;
    }
}

.downloadCV {
    flex-direction: column-reverse;
    place-items: center;
    // gap: 5px;
    background-color: var(--color-background-download-25);
    color: var(--color-icon);
    border: 2px dashed var(--color-button-border);
    border-radius: 5px;
    transition: background .3s, box-shadow .2s;
    padding: .3em .4em;
    cursor: pointer;

    span {
        color: var(--color-icon);
        font-size: .8em;
        font-weight: var(--weight-bold);
    }

    @media #{$desktopDownScreen} {
        &:hover {
            background-color: var(--color-background-download-6);
            box-shadow: 0 1px 3px var(--color-border-1);
        }
    }

    &:active {
        // background: var(--color-button-active);
        background: var(--color-button);
        box-shadow: 0 1px 6px var(--color-border-1);
    }

    svg {
        background: transparent;
        width: 20px;
        height: 20px;
    }
}
</style>