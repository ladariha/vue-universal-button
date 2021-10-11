# universal-button written in Vue3 

## How to use it
- no BUILD! The component is published as NPM package in form of source code
- add dependency:
```
yarn add ladariha-button
```

- import vue file directly
```
import MyButton from "ladariha-button/src/components/MyButton.vue";
```
## Sample usage in Vue2 project:

```
<template>
  <div id="app">
    <MyButton />
    Reactive number: {{ randomNumber }}
  </div>
</template>

<script lang="ts">
import MyButton from "ladariha-button/src/components/MyButton.vue";
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "App",
  components: {
    MyButton,
  },
  setup() {
    const randomNumber = ref(Math.random());

    setInterval(() => {
      randomNumber.value = Math.random();
    }, 3000);

    return { randomNumber };
  },
});
</script>
```
