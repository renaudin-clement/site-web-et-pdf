<script>
import document from '@/components/document.vue';
import { refreshlist, Ajouter, Supprimer } from "../utils/supabaselist.js";
export default {
    data() {
        return {
            nomPdf: [],
            nbtotal: 0,
            lien: "public/elecr.pdf",
            nameSelect: "elecr.pdf",
            fichieracreer: null
        };
    },
    components: {
        document
    },
    methods: {
        Ajouter,
        Supprimer,
        refreshlist,

        handleFileChange(event) {
            const file = event.target.files?.[0];
            if (file) {
                this.fichieracreer = file;
                console.log(this.fichieracreer);
                console.log(file.name);
            }

        },
        async handleAjouter() {
            console.log(this.fichieracreer);
            await Ajouter(this.fichieracreer);
            this.nomPdf = await refreshlist();
        },

        async handleSupprimer() {
            await Supprimer(this.nameSelect);
            this.nomPdf = await refreshlist();
        },
    },
    async mounted() {
        this.nomPdf = await refreshlist();
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
                    <input type="file" id="fileInput" @change="handleFileChange" ref="fichiercreer">
                    <button class="button-15" role="button" type="button">valider</button>
                    <button class="button-15" role="button" type="button" @click="handleAjouter()">ajouter</button>
                    <button class="button-15" role="button" type="button" @click="handleSupprimer()">supprimer</button>
                    <button class="button-15" role="button" type="button">Annuler</button>
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
.wrapper {
    width: 59%;
}

#fileInput {
    font-size: 1em;
}
</style>
