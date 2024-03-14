<template>
  <div>
    <div>MyTest 컴포넌트</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
