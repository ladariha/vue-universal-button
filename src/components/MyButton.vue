<template>
  <div>
    <button @click="onClick">Click me</button>
    <h2>Click count {{ clickCount }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "MyButton",
  props: {},
  setup() {
    const clickCount = ref(0);
    const onClick = () => {
      clickCount.value += 1;
    };

    return { onClick, clickCount };
  },
});
</script>
