<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue';
import VideoPlayerComponent from './Modules/VideoPlayerComponent.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    ButtonsComponent,
    VideoPlayerComponent
  }
}
</script>

<template>
  <div class="content">
    <section id="start">
      <img src="../assets/about/logoAbout.png">
      <h3>Ваш крутой краткий лозунг</h3>
      <ButtonsComponent :color="'orange'" />
    </section>
    <selection id="caption">
      <h3>“Ваше желание - наш <span>результат</span>“</h3>
      <h4>Мы стремимся к большему. Каждый раз путь становится только интеренсее! Новые знакомства, новые идеи, новые фишки. Мы можем делать так, как другие побоятся!</h4>
      <h4 class="author">Команда Eventer</h4>
    </selection>
    <VideoPlayerComponent/>
  </div>
</template>

<style scoped lang="scss">
  .content{
    width: 100%;
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3{
      font-weight: 600;
      font-size: 36px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

  #start{
    width: 100%;
    background-image: url(../assets/about/peopleHead.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-bottom: 797px;

    img{
      width: 256px;
    }
    h3{
      font-weight: 600;
      font-size: 36px;
      text-transform: uppercase;
      padding-bottom: 30px;
      letter-spacing: 0.03em;
    }
  }
  #caption{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 800px;
    padding: 180px 0;

    h3{
      width: 100%;
      text-align: left;

      span{
        color: #F86F03;
      }
    }

    h4{
      font-family: 'Manrope', sans-serif;
      font-weight: 300;
      font-size: 20px;
      letter-spacing: 0.03em;
    }

    .author{
      width: 100%;
      text-align: right;
    }
  }
</style>
