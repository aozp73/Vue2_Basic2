<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      name: "myName",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.name);
  },
  created() {
    console.log("created", this.name);
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  },
};
</script>

<style></style>
