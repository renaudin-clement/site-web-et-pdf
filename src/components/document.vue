<script>


export default {
  data() {
    return {
      ligne:0,
      collones:0,

    };
  },

  props: ['place','name','isActive'],
  emits:['checkers'],
  methods: {
    handelcheckBox(){
      this.$emit('checkers',this.name)
    },

  },

  mounted() {
    if (this.place%3 == 0){
      this.ligne =0
    } 
    this.collones = this.place/3
  }
};
</script>

<template>
  <li class="one" style="grid-column: '{{this.collones}}' ; grid-row: '{{this.ligne}}';" v-if=' this.name != ".emptyFolderPlaceholder"' >
    <label :for='"checkbox_"+this.place'>
      <p>{{this.name}}</p>
      <img src="/src/assets/img/pdf_file.png" alt="document PDF">
      <div>
        <input class="checkbox" type="checkbox" :id='"checkbox_"+this.place' @change="handelcheckBox()" :name='"checkbox_"+this.place' id="" :checked="isActive">
      </div>
    </label>
  </li>
</template>

<style scoped>
li{
  max-width: 100%;
  max-height: 15em;
}

label{
  width: 100%;
  height: 100%;
}



</style>
