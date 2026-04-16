<script>
import { initPage} from "../utils/supabaseObtentionPdf";
export default {
    data() {
        return {
            lienActif:"src/assets/pdf/pdf.pdf",
            lien:"",
            backuplien:"",
        };
    },
    methods: {
        initPage,

        async handleInitPage() {
            if( this.lien ==""){
                this.lien = await initPage();
                if (this.lien=="") {
                    alert("probleme recuperation")
                    return this.lienActif;
                }
            }
            this.lienActif =  this.lien;
            return this.lien;
        },

        async handleHelp() {
            this.lienActif = "src/assets/pdf/pdf.pdf";
            return this.lienActif;
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
    <section class="separateur">
        <RouterLink to="/document">document</RouterLink>
        <section>
            <button class="button-15" @click="handleInitPage()" role="button">Charger</button>
            <button class="button-15" @click="handleHelp()" role="button">Aide 15</button>
            <RouterLink tag="button" class="button-15" role="button" to="/">déconnexion</RouterLink>
        </section>
    </section>
</template>


<style scoped>
</style>
