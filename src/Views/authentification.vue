<script>
import { connection,connectionV2,recupcode} from "../utils/connectionApp";
export default {
    data() {
        return {
            MDP: "",
            error:"",
        };
    },
    methods: {
        connection,
        connectionV2,
        recupcode,
        async testconnection() {
            this.error = await connectionV2(this.MDP);
            let login = localStorage.getItem("login");
            if (login == "true") {
                this.$router.push({ name: 'home', query: { redirect: 'home' } });
            }
        },

        async er(){
            await recupcode()
        },
        async mounted() {

        },
    },
};
</script>

<template>

    <div class="container">
        <form @submit.prevent="testconnection" class="autform">
            <h1>Tape le code</h1>
            <input type="password" name="ok" id="lecode" placeholder="Mot de passe" required v-model="this.MDP">
            <button> Valider</button>
        </form>
        <p v-if="error" style="color:red">
            {{ error }}
        </p>
    </div>




</template>


<style scoped></style>
