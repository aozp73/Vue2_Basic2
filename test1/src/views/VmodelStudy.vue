<template>
  <div>
    <h1>This is Home !!!</h1>
    <form action="">
      <InputField2 v-model="name"></InputField2>
      <button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField2 from "@/components/InputField2.vue";
export default {
  components: {
    InputField2,
  },
  data() {
    return {
      name: "",
    };
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   },
  // },
};
</script>

<style scoped></style>
