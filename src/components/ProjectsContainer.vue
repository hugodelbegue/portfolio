<script setup>
import Project from './items/Project.vue'
import Language from './items/Language.vue'
import Button from './items/Button.vue'
// import '../assets/data/ProjectData.vue'
</script>

<template>
    <h2>Mes projets web.</h2>
    <div class="projectscontainer">
        <div class="selectors">
            <Button padding=".5" msg="Tous" />
            <Button padding=".5" msg="Full Frontend" />
            <Button padding=".5" msg="Avec Backend" />
        </div>
        <div class="layout__project">
            <div v-for="data in dataList" class="project">
                <Project :url="data.url">
                    <template #title>
                        <div class="layout__title">{{ data.title }}</div>
                    </template>
                    <template #image>
                        <img :src="data.img" alt="">
                    </template>
                    <template #language>
                        <div class="layout__language">
                            <div v-for="lang in data.language">
                                <Language :language="lang.name" style="box-shadow: 0 0 2px" />
                            </div>
                        </div>
                    </template>
                </Project>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [
                { id: 1, url: "/", img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", title: "Hello à tous", language: [{ name: "css" }, { name: "sql" }, { name: "docker" }] },
                { id: 2, url: "/", img: "https://media.istockphoto.com/id/1140180560/fr/photo/explosion-de-poudre-color%C3%A9e-sur-fond-noir.jpg?s=612x612&w=0&k=20&c=8EKPu2s5gLcqb09jSmT0tgrydf9UYLzHm3dtoTm5vfs=", title: "Hello world", language: [{ name: "js" }, { name: "mongodb" }, { name: "react" }] },
                { id: 3, url: "/", img: "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg", title: "Bienvenue", language: [{ name: "css" }, { name: "html" }, { name: "scss" }] },
                { id: 4, url: "/", img: "https://st3.depositphotos.com/7036298/14140/i/600/depositphotos_141401686-stock-photo-yellow-sunflowers-close-up-in.jpg", title: "Mangez moi, je suis bon!", language: [{ name: "php" }, { name: "ruby" }, { name: "xampp" }] },
                { id: 5, url: "/", img: "https://www.affluences.ca/upload/2019/07/site-web-525X300-1.png", title: "Toujours la même.", language: [{ name: "vue" }, { name: "nuxt" }, { name: "seo" }] },
            ]
        }
    }

}
</script>
<style lang="scss" scoped>
.projectscontainer {
    img {
        width: 100%;
        height: 100%;
    }

    .layout__project {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3.3em;
    }

    .layout__title {
        font-size: 1.3em;
        font-weight: var(--weight-bold);
        letter-spacing: normal;
        padding-bottom: .3em;
    }

    .layout__language {
        display: flex;
        justify-content: flex-end;
        column-gap: 10px;
        width: 100%;
        padding-top: .9em;
        padding-right: .3em;
    }
}

h2 {
    &::before {
        content: url(../assets/pc-display.svg);
        margin-right: .5em;
    }
}

.selectors {
    display: flex;
    place-content: flex-end;
    column-gap: 1em;
    margin-bottom: 4.3em;
}
</style>