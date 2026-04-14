<script>
import { initPage} from "../utils/supabaseObtentionPdf";
export default {
    data() {
        return {
            lien:"",
        };
    },
    methods: {
        initPage,

        async handleInitPage() {
            if( this.lien ==""){
                return this.lien = await initPage();
            }
            return this.lien;
        },
    },
    async mounted() {
    }
};
</script>

<template>
    <div class="container">
        <iframe src="/public/asset/pdf.pdf"></iframe>
    </div>
    <div class="error" id="error" style="visibility: hidden;">
        <img id="errorimg2" src="/travailleur-plat-cle.png" alt="travailleur">
        <p id="errortext"></p>
        <img id="errorimg1" src="/travailleur-plat-cle.png" alt="travailleur">
    </div>
    <section class="separateur">
        <RouterLink to="/aut">autentification</RouterLink>
        <RouterLink to="/document">document</RouterLink>

        <section>
            <button class="button-15" @click="handleInitPage()" role="button">Charger</button>
            <button class="button-15" role="button">Aide 15</button>
            <button class="button-15" role="button">Button 15</button>
        </section>
    </section>
</template>


<style scoped>
</style>
