<template>
  <div>
    <label for="">Name</label>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    // updateName(e) {
    //   console.log(e.target.value);
    //   this.$emit("update-name", e.target.value);
    // },
  },
};
</script>

<style></style>
