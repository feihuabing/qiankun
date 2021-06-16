<template>
  <div class="home">
    {{type}}  child2
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      type:''
    }
  },
  created() {
    this.$EventBus.$on("setType", (type) => {
      this.type=type
    });
  },
};
</script>
