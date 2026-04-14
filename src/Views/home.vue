<script>
import { initPage} from "../utils/supabaseObtentionPdf";
export default {
    data() {
        return {
            lienActif:"/public/asset/pdf.pdf",
            lien:"",
            backuplien:"",
        };
    },
    methods: {
        initPage,

        async handleInitPage() {
            if( this.lien ==""){
                this.lien = await initPage();
            }
            this.lienActif =  this.lien;
            return this.lien;
        },

        async handleHelp() {
            this.lienActif = "/public/asset/pdf.pdf";
            return this.this.lienActif;
        },
    },
    async mounted() {
    }
};
</script>

<template>
    <div class="container">
        <iframe :src="this.lienActif"></iframe>
    </div>
    <div class="error" id="error" style="visibility: hidden;">
        <img id="errorimg2" src="/travailleur-plat-cle.png" alt="travailleur">
        <p id="errortext"></p>
        <img id="errorimg1" src="/travailleur-plat-cle.png" alt="travailleur">
    </div>
    <section class="separateur">
        <RouterLink to="/document">document</RouterLink>
        <section>
            <button class="button-15" @click="handleInitPage()" role="button">Charger</button>
            <button class="button-15" @click="handleHelp()" role="button">Aide 15</button>
            <RouterLink tag="button" class="button-15" role="button" to="/aut">déconnexion</RouterLink>
        </section>
    </section>
</template>


<style scoped>
</style>
