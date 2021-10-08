<template>
  <MyButton />
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import MyButton from "@/components/MyButton.vue";

export default defineComponent({
  name: "App",
  components: {
    MyButton,
  },
});
</script>
