<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    ButtonsComponent
  }
}
</script>

<template>
  <div class="content">
    <ButtonsComponent :color="'orange'" />
  </div>
</template>

<style scoped lang="scss">
  .content{
    height: 200vh;
    padding: 64px;
  }
</style>