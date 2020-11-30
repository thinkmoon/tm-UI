<template>
  <div>
    <Message></Message>
  </div>
</template>

<script>
import Message from "./examples/Message"
export default {
  name: "App",
  components:{
    Message
  },
  data() {
    return {
    };
  },
  mounted() {
  }
};
</script>
<style lang="scss">
@import "../tm-ui/css/main";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  font-size:50px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
