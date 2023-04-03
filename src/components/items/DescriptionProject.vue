<template>
    <div ref="infos" class="project__description__content close">
        <div class="title__button">
            <div @click="toggleInfos" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
            </div>
            <h3>TITRE DU PROJECT</h3>
        </div>
        <div class="project__description__layout">
            <div class="preview__content">
                <div class="preview__development">
                    <h4>Infos du site</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, libero?</p>
                </div>
                <div class="preview__infos">
                    <h4>
                        Compétences
                    </h4>
                    <ul>
                        <li>Responsive</li>
                        <li>Partie front</li>
                        <li>Bla bla</li>
                        <li>Je travaille dans un café</li>
                        <li>Hello world</li>
                    </ul>
                </div>
            </div>
            <div class="preview">
                <img src="../assets/img/previews/association_romane_faure.png" alt="">
                <img src="../assets/img/previews/association_romane_faure.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>