<template>
  <router-view/>
  <section class="hero">
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
  </section>
  <section id="talants">
    <div class="container">
      <div class="talant-wrapper">
        <div class="talant-left">
          <div>
            <img src="../assets/logoText.png" alt="">
          </div>
          <h2>
            Объединение<br>талантов
          </h2>
        </div>
        <div class="talant-right">
          <div class="card-wrapper">
            <div class="card">
              <div>
                <img src="../assets/home/time.png" alt="">
              </div>
              <p>Опыта</p>
              <h3>25 лет</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/ivents.png" alt="">
              </div>
              <p>Опыта</p>
              <h3>25 лет</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/organizations.png" alt="">
              </div>
              <p>Опыта</p>
              <h3>25 лет</h3>
            </div>
          </div>
          <p>
            Уже более 15 лет мы работаем в сфере организации мероприятий. 
            За это выремя нам удалось. Мы очень рады вам тут! Опыта у нас много 
            так что заказывайте корпораты!
          </p>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script>

</script>

<style lang="scss" scoped>
  %first-btn{
    padding: 15px 30px;
    background-color: #C15500;
    border: 1px solid #C15500;
    border-radius: 2px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #F3F3F3;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
      background-color: #525FE1;
      border-color: #525FE1;
      transition: 0.5s;
    }
  }
  %second-btn{
    padding: 15px 30px;
    background-color: #D0D0D0;
    border: 1px solid #D0D0D0;
    border-radius: 2px;
    color: #D85F00;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
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
      color: #F3F3F3;
    }
    .hero-buttons{
      display: flex;
      gap: 16px;

      .first-btn{
        @extend %first-btn;
      }
      .second-btn{
        display: flex;
        align-items: center;
        gap: 10px;
        @extend %second-btn;
      }
    }
    
  }
  .talant-wrapper{
      padding: 180px 0;
      display: flex;
      justify-content: space-between;

      .talant-left{
        display: flex;
        flex-direction: column;
        gap: 24px;

        img{
          height: 24px;
        }
        h2{
          font-family: "Roboto Flex";
          font-weight: 600;
          font-size: 36px;
          color: #F3F3F3;
        }
      }
      .talant-right{
        width: 636px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        color: #F3F3F3;

        .card-wrapper{
          display: flex;
          justify-content: space-between;
          
          .card{
            padding: 12px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            background:linear-gradient(to bottom right,#0A0A0B, #0F0F11);
            gap: 14px;
            width: calc(33% - 32px);

            p{
              font-weight: 300;
              font-size: 14px;
            }
            h3{
              font-family: "Roboto Flex";
              font-weight: 600;
              font-size: 24px;
            }
          }
        }
        p{
          font-weight: 300;
          opacity: 0.9;
          font-size: 18px;
        }

      }
    }
</style>