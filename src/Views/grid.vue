<script>
import document from '@/components/document.vue';
import listedocument from "../utils/supabaselsit.js";
    export default {
    data() {
        return {
        nomPdf: [],
        nbtotal: 0,
        };
    },
    components: {
        document
    },
    mounted() {
        this.nomPdf = listedocument;
    }
    };
</script>

<template>
    <div class="container">
        <h1 style="font-size:4em">Gestion Document</h1>
        <form action="" class="gridforme">
            <section>

                <h2>DOC DOC</h2>
                <div id="drop-zone">
                    <p>Dépose tes fichiers ici</p>
                </div>
                <section class="chargment" style="">
                    <p>chargement ...</p>
                    <img src="/src/assets/img/189768.png" alt="chargement">
                </section>

                <section>
                    <button class="button-15" role="button">Button 15</button>
                    <button class="button-15" role="button">Button 15</button>
                    <button class="button-15" role="button">Button 15</button>
                </section>
            </section>
            <div class="wrapper scroller">
                <document :place="nomPdf.indexOf(item)" :name="item.name" v-for="item in nomPdf" />
            </div>

        </form>
    </div>

    <nav class="separateur">
        <RouterLink to="/home">home</RouterLink>
        <RouterLink to="/aut">authentification</RouterLink>
    </nav>
</template>

<style scoped>

.wrapper{
    width:59%;
}

</style>

