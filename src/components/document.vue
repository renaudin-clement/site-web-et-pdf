<script>


export default {
  data() {
    return {
      ligne:0,
      collones:0,

    };
  },

  props: ['place','name'],

  mounted() {
    if (this.place%3 == 0){
      this.ligne =0
    } 
    this.collones = this.place/3

    console.log(this.place);
  }
};
</script>

<template>
  <li class="one" style="grid-column: '{{this.collones}}' ; grid-row: '{{this.ligne}}';" v-if=' this.name != ".emptyFolderPlaceholder"' >
    <p>{{this.name}}</p>
    <img src="/public/pdf_file.png" alt="document PDF">
    <div>
      <input class="checkbox" type="checkbox" :name='"checkbox_"+(this.collones*3+this.ligne)' id="">
    </div>
  </li>
</template>

<style scoped>
li{
  min-height:15em;
}
</style>
