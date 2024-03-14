<template>
  <div class="about">
    <h1>This is an Slot Page</h1>
    <SlotComponent>
      <template #header="{ hello }">
        <p>header111 {{ hello }}</p>
        <p></p
      ></template>

      <template v-slot:default>
        <p>Body222</p>
        <p></p
      ></template>
    </SlotComponent>
  </div>
</template>

<script>
import SlotComponent from "@/components/SlotComponent.vue";

export default {
  components: {
    SlotComponent,
  },
};
</script>

<style></style>
