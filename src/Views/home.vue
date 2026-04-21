<script>
import { initPage } from "../utils/supabaseObtentionPdf";
import { deconnexion } from "../utils/deconnexion.js";
export default {
    data() {
        return {
            lienActif: "/pdf/Guide_help.pdf",
            lien: "",
            backuplien: "",
            names: "",
            afficher_doc: false,
        };
    },
    methods: {
        initPage,
        deconnexion,

        async handleInitPage() {
            if (this.lien == "") {
                this.lien = await initPage();
                if (this.lien == "") {
                    alert("probleme recuperation")
                    return this.lienActif;
                }
                this.names = "document charger";
            }
            this.lienActif = this.lien;
            return this.lien;
        },

        async handleHelp() {
            this.lienActif = "/pdf/Guide_help.pdf";
            this.names = "Guide_help.pdf";
            return this.lienActif;
        },
    },
    async mounted() {
        this.names = "Guide_help.pdf";
        
        if (localStorage.getItem("admin") == "true") {
            this.afficher_doc = true;
        }else{
            this.afficher_doc = false;
        }
    }
};
</script>

<template>
    <header>
        <RouterLink tag="button" class="button-15" role="button" to="/" :click="deconnexion">déconnexion</RouterLink>
    </header>

    <h2 style="display: none;">{{ this.names }}</h2>

    <div class="container">
        <iframe :src="this.lienActif"></iframe>
    </div>

    <section class="separateur">
        <RouterLink to="/document" class="document" v-if="this.afficher_doc">document</RouterLink>
        <section>
            <button class="button-15" @click="handleInitPage()" role="button">Charger</button>
            <button class="button-15" @click="handleHelp()" role="button">Aide 15</button>
        </section>
    </section>
</template>


<style scoped></style>
