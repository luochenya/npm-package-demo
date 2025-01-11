<script>
  import { defineComponent } from "vue";
  import LuoChenYaButton from "./package/luochenya-button/index.vue";
  import LuoChenYaJs from "./package/luochenya-js/index.js";

  export default defineComponent({
    components: {
      LuoChenYaButton
    },
    methods: {
      handleClick() {
        const { handleThousands } = LuoChenYaJs;
        console.log(handleThousands(1234567890));
      }
    }
  })
</script>

<template>
  <LuoChenYaButton @confirm="handleClick">test按钮</LuoChenYaButton>
</template>