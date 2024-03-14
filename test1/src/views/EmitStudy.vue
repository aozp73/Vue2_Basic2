<template>
  <div>
    <h1>This is Home !!!</h1>
    <form action="">
      <InputField
        :name="name"
        @update-name="name = $event.target.value"
      ></InputField>
      <button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
export default {
  components: {
    InputField,
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
