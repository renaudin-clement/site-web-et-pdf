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
            isMobile: false,
            charger: false,
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
            }
            const mq = window.matchMedia('(max-width: 768px)')
            this.isMobile = mq.matches
            this.charger = true;
            this.names = "document charger";
            this.lienActif = this.lien;
            return this.lien;
        },

        async handleHelp() {
            this.lienActif = "/pdf/Guide_help.pdf";
            this.names = "Guide_help.pdf";

            const mq = window.matchMedia('(max-width: 768px)')
            this.isMobile = mq.matches
            this.charger = false;

            return this.lienActif;
        },
    },
    async mounted() {
        this.names = "Guide_help.pdf";
        if (localStorage.getItem("admin") == "true") {
            this.afficher_doc = true;
        } else {
            this.afficher_doc = false;
        }
        const mq = window.matchMedia('(max-width: 768px)')
        this.isMobile = mq.matches
        mq.addEventListener('change', e => this.isMobile = e.matches)
    }
};
</script>

<template>
    <header>
        <RouterLink tag="button" class="button-15" role="button" to="/" :click="deconnexion">déconnexion</RouterLink>
    </header>

    <h2 style="display: none;">{{ this.names }}</h2>

    <div v-if="this.isMobile == false" class="container">
        <iframe :src="this.lienActif"></iframe>
    </div>

    <div v-else class="container">
        <iframe v-if="!this.charger" :src="this.lienActif"></iframe>
        <div v-else class="group-button">
            <iframe class="version_tel" :src="`https://docs.google.com/viewer?url=${this.lienActif}&embedded=true`">
            </iframe>
            <iframe class="telechargment_tel" :src="this.lienActif"></iframe>
        </div>
    </div>

    <section class="separateur">
        <RouterLink to="/document" class="document" v-if="this.afficher_doc">document</RouterLink>
        <section>
            <button class="button-15" @click="handleInitPage()" role="button">Charger</button>
            <button class="button-15" @click="handleHelp()" role="button">Aide 15</button>
        </section>
    </section>
</template>


<style scoped>
.version_tel {
    height: 80%;
}

.telechargment_tel {
    padding-top: 1em;
    height: 4em;
    width: 6em;
}

.group-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 1em;
}
</style>
