<script>
import document from '@/components/document.vue';
import { refreshlist, Ajouter, Supprimer } from "../utils/supabaselist.js";
import { GetSelected, UpdateFile } from "../utils/getSelectedFile.js";

export default {
    data() {
        return {
            nomPdf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            nbtotal: 0,
            lien: "public/elecr.pdf",
            nameSelect: "",
            appliquer: "",
            listChecboxValide:[],
            fichieracreer: null,
        };
    },
    components: {
        document
    },
    emits:['checkers'],
    methods: {
        Ajouter,
        Supprimer,
        refreshlist,
        GetSelected,
        UpdateFile,

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
            this.fichieracreer = null;
        },

        async handleSupprimer() {
            await Supprimer(this.nameSelect);
            this.nomPdf = await refreshlist();
        },
        onDrop(e) {
            console.log([...e.dataTransfer.files]);
        },

        SelectCheckbox(name){
            console.log("avant :" + this.listChecboxValide);
            if(this.listChecboxValide.includes(name)){
                let place = this.listChecboxValide.indexOf(name);
                this.listChecboxValide.splice(place, 1);
            }else{
                this.listChecboxValide.push(name);
            }
            console.log("apres :" +this.listChecboxValide);
        },
    },
    async mounted() {
        this.nomPdf = await refreshlist();
        console.log(this.nomPdf)
        
        this.appliquer = await GetSelected();
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
                    <label id="drop-zone" @drop.prevent="onDrop">
                        Drop images here, or click to upload.
                        <input type="file" id="fileInput2" @change="handleFileChange" ref="fichiercreer"
                            accept="application/pdf">
                    </label>
                </section>
                <section class="chargment">
                    <section>
                        <p>Fichier Deposer</p>
                        <img class="petitimage" src="/public/pdf_file.png" alt="document PDF">
                        <p v-if="this.fichieracreer != null">{{ this.fichieracreer.name }}</p>
                    </section>
                    <section>
                        <p>Fichier Appliqué</p>
                        <img class="petitimage" src="/public/pdf_file.png" alt="document PDF">
                        <p>{{ this.appliquer }}</p>
                    </section>
                </section>

                <section class="sectbutton">
                    <button class="button-14 button-s" role="button" :disabled="(this.listChecboxValide.length>1 || this.listChecboxValide.length<=0)" type="button">valider</button>
                    <button class="button-15 button-s" role="button" :disabled='(this.fichieracreer == null || this.fichieracreer=="")' type="button" @click="handleAjouter()">ajouter</button>
                    <button class="button-16 button-s" role="button" :disabled="this.listChecboxValide.length==0 || this.listChecboxValide.length<0" type="button" @click="handleSupprimer()">supprimer</button>
                    <button class="button-17 button-s" role="button" :disabled='((this.fichieracreer == null || this.fichieracreer=="") && (this.listChecboxValide.length==0 || this.listChecboxValide.length<0))' type="button">Annuler</button>
                </section>
            </section>
            <div class="wrapper scroller">
                <document @checkers="SelectCheckbox" :place="nomPdf.indexOf(item)" :name="item.name" v-for="item in nomPdf" />
            </div>

        </form>
    </div>

    <nav class="separateur">
        <RouterLink tag="button" class="button-14" role="button" to="/home">home</RouterLink>
        <RouterLink tag="button" class="button-15" role="button" to="/aut">déconnexion</RouterLink>
    </nav>
</template>

<style scoped>
.wrapper {
    width: 59%;
    background-image: url("src/assets/img/SL-072321-44560-09.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}


.sectbutton {
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
    font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
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


.button-14:disabled,
.button-15:disabled,
.button-16:disabled,
.button-17:disabled {
    cursor: default;
    opacity: .3;
}

.chargment {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    border: 2px solid #ccc;
}

.chargment>section {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
}

.chargment>section>p {
    width: fit-content;
    max-width: fit-content;
    text-align: left;
    padding-right: 1em;
    padding-left: 1em;
    font-size: 1em;
    color: white;
    min-width: 35%;
}

.petitimage {
    width: 2em;
}
</style>
