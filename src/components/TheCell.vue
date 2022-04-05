<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    row: Number,
    col: Number,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    isNumber(e: KeyboardEvent) {
      let char = String.fromCharCode(e.keyCode);
      if (/[1-9]$/.test(char)) {
        if (this.value.length === 0) return true;
        else this.value = char;
      }
      e.preventDefault();
    },
  },
  mounted() {
    this.value;
  },
});
</script>
<template>
  <input type="text" v-model="value" v-on:keypress="isNumber($event)" />
</template>
<style scoped>
input {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 40px;
}
</style>
