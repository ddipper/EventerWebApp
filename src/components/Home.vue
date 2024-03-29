<template>
  <router-view/>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          Идеи, вдохновленные вами -<br>
          организуются нами
        </h1>
        <div class="hero-buttons">
          <button class="first-btn">Заказать звонок</button>
          <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

</script>

<style lang="scss" scoped>
  %first-btn{
    padding: 15px 30px;
    background-color: #C15500;
    font-family:'Roboto flex';
    color: #F3F3F3;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  %second-btn{
    padding: 15px 30px;
    background-color: #D0D0D0;
    font-family:'Roboto flex';
    
    color: #D85F00;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
  .hero{
    background-image: url(../assets/home/home_hero.png);
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
    }
    .hero-buttons{
      display: flex;
      gap: 16px;

      .first-btn{
        @extend %first-btn;
      }
      .second-btn{
        @extend %second-btn;
      }
    }
  }
</style>