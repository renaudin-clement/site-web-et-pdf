<script>
import { connection, connectionV2, recupcode } from "../utils/connectionApp";
export default {
    data() {
        return {
            MDP: "",
            error: "",
            yoeux: false,
        };
    },
    methods: {
        connection,
        connectionV2,
        recupcode,

        oeil(){
            this.yoeux = !this.yoeux;
        },

        async testconnection() {
            this.error = await connectionV2(this.MDP);
            let login = localStorage.getItem("login");
            if (login == "true") {
                this.$router.push({ name: 'home', query: { redirect: 'home' } });
            }
        },

        async er() {
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
            <label>
                <input :type="yoeux ? 'text':'password'" name="ok" id="lecode" placeholder="Mot de passe" required v-model="this.MDP">
                <div class="password-icon" @click="oeil">
                    <img  id="yoeux" :src="yoeux ? '/eye.svg' : '/eye-off.svg'" alt="eye-off">
                </div>
            </label>
            <button> Valider</button>
        </form>
        <p v-if="error" style="color:red">
            {{ error }}
        </p>
    </div>




</template>


<style scoped>
label {
  position: relative;
  width: 100%;
}

label input {
  font-size: 1em;
  padding: 1rem 1.2rem;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #7a7a7a;
  transition: all 0.2s;
}

label input:focus {
  border-color: #ff4754;
}


label .password-icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 20px;
  color: #f9f9f9;
  transition: all 0.2s;
}


label .password-icon:hover {
  cursor: pointer;
  color: #ff4754;
}

label .password-icon .feather-eye-off {
  display: none;
}



</style>
