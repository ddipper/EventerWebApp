<template>
  <router-view/>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          ОРГАНИЗАЦИЯ BTL В МИНСКЕ
        </h1>
        <h2>
          Более 180 мероприятий за 10 лет на высшем уровне
        </h2>
        <ButtonsComponent :color="'yellow'" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue'
  export default{
      data(){
        return{

        }
      },
      components:{
        ButtonsComponent
      }
  }
</script>

<style lang="scss" scoped>
  h1{
    font-size: 40px;
    font-weight: 600;
  }
  h2{
    font-size: 20px;
    font-weight: 500;
  }
  .hero{
    background-image: url(../assets/BTL/btl_hero.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container{
    padding: 0 230px;
  }
  .hero-content{
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 32px;

    h1{
      font-size: 40px;
      font-weight:500;
      line-height: 60px;
      color: #F3F3F3;
    }
  }
</style>