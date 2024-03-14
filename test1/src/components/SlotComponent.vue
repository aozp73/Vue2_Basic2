<template>
  <div>
    <p>header</p>
    <slot name="header" :hello="hello"></slot>
    <p>Body</p>
    <slot name="default"></slot>
    <p>footer</p>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      hello: "world",
    };
  },
};
</script>

<style></style>
