<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ apiResponse }}</h1>
    <button class="clickable" @click="testFlask">Yolo</button>
  </div>
</template>

<script lang="ts">
import api from "../axios_instances/flask_api";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;

  apiResponse = "";

  async created() {
    await this.testFlask();
  }

  async testFlask() {
    try {
      const response = await api.get("/");
      this.apiResponse = response.data;
    } catch (error) {
      alert(error);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
