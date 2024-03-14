<template>
  <div>
    <h1>This is Home !!!</h1>
    <p>{{ name }}</p>
    <br />
    <MyTest></MyTest>
  </div>
</template>

<script>
import MyTest from "@/components/MyTest.vue";

export default {
  components: {
    MyTest,
  },
  data() {
    return {
      name: "Hello world !!",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
