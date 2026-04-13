<script>


export default {
  data() {
    return {
      ligne:0,
      collones:0,

    };
  },

  props: ['place'],

  mounted() {
    if (this.place%3 == 0){
      this.ligne =0
    } 
    this.collones = this.place/3
  }
};
</script>

<template>
  <li class="one" style="grid-column: '{{this.collones}}' ; grid-row: '{{this.ligne}}';">
    <p>Un</p>
    <img src="/public/pdf_file.png" alt="">
    <div>
      <input class="checkbox" type="checkbox" name="" id="">
    </div>
  </li>
</template>

<style scoped></style>
