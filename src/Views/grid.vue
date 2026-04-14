<script>
import document from '@/components/document.vue';
import { refreshlist, Ajouter, Supprimer } from "../utils/supabaselist.js";
export default {
    data() {
        return {
            nomPdf: [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20],
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
                <section class="drop">
                    <label id="drop-zone">
                        Drop images here, or click to upload.
                        <input type="file" id="fileInput2" @change="handleFileChange" ref="fichiercreer"
                            accept="application/pdf">
                    </label>
                </section>
                <section class="chargment">
                    <section>
                        <p>Fichier Deposer</p>
                        <img class="petitimage" src="/public/pdf_file.png" alt="document PDF">
                    </section>
                    <section>
                        <p>Fichier Appliqué</p>
                        <img class="petitimage" src="/public/pdf_file.png" alt="document PDF">
                    </section>
                </section>

                <section class="sectbutton">
                    <button class="button-14 button-s" role="button" type="button">valider</button>
                    <button class="button-15 button-s" role="button" type="button" @click="handleAjouter()">ajouter</button>
                    <button class="button-16 button-s" role="button" type="button" @click="handleSupprimer()">supprimer</button>
                    <button class="button-17 button-s" role="button" type="button">Annuler</button>
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


.sectbutton{
    width: 100%;
    display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.drop {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

#drop-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 15rem;
    padding: 1em;
    border: 2px solid #cccccc;
    border-radius: 4px;
    color: slategray;
    cursor: pointer;
}

#fileInput2 {
    display: none;
}


.button-s {
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  width: 40%;
}


.button-14 {
  background-image: linear-gradient(#48ec42, #39c900);
  border: 1px solid #25cc00;
  color: #FFFFFF;
}

.button-14:hover {
  background-image: linear-gradient(#7bee51, #4fcd14);
  border-color: #24d014;
  text-decoration: none;
}

.button-15 {
  background-image: linear-gradient(#42A1EC, #0070C9);
  border: 1px solid #0077CC;
  color: #FFFFFF;
}

.button-15:hover {
  background-image: linear-gradient(#51A9EE, #147BCD);
  border-color: #1482D0;
  text-decoration: none;
}

.button-16 {
  background-image: linear-gradient(#ec4242, #c90000);
  border: 1px solid #cc0000;
  color: #FFFFFF;
}

.button-16:hover {
  background-image: linear-gradient(#ee5151, #cd1414);
  border-color: #d01414;
  text-decoration: none;
}

.button-17 {
  background-image: linear-gradient(#ece642, #bfc900);
  border: 1px solid #ccc500;
  color: #FFFFFF;
}

.button-17:hover {
  background-image: linear-gradient(#eeee51, #c1cd14);
  border-color: #cdd014;
  text-decoration: none;
}


.button-14:disabled,.button-15:disabled,.button-16:disabled ,.button-17:disabled {
  cursor: default;
  opacity: .3;
}

.chargment{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    border: 2px solid #ccc;
}

.chargment > section{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
}

.chargment > section > p{
    width: fit-content;
    max-width: fit-content;
    text-align: left;
    padding-right: 1em;
    padding-left: 1em;
    font-size: 1.7em;
    color: white;
    min-width: 64%;
}

.petitimage{
    width: 2em;
}

</style>
