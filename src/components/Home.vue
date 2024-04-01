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
              <p>ОПЫТА</p>
              <h3>25 лет</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/ivents.png" alt="">
              </div>
              <p>МЕРОПРИЯТИЙ</p>
              <h3>150+</h3>
            </div>
            <div class="card">
              <div>
                <img src="../assets/home/organizations.png" alt="">
              </div>
              <p>ОРГАНИЗАЦИЙ</p>
              <h3>50+</h3>
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
  <section id="Golden_prison">
    <div class="container">
      <div class="prison-wrapper">
        <div class="prison-text">
          <p><img src="../assets/home/comments.png">ОТЗЫВ</p>
          <h2>Golden prison</h2>
          <p>НОВЫЙ ГОД</p>
          <p>“Ребята справились на все сто! Все сотрудники были довольны. Настолько организованного построения корпоратива у нас еще не былою Ни минуты не осталось для того, чтобы скучать.Еда на уровне, алкоголь на уровне, развлечения на уровне”</p>
        </div>
        <div class="prison-button">
          <button class="first-btn">Заказать звонок</button>
          <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
        </div>
      </div>
    </div>
  </section>
  <section id="Organization">
    <div class="container organization_wrapper">
      <h2>
        ЭТАПЫ ОРГАНИЗАЦИИ С EVENTER
      </h2>
      <div class="stages">
        <hr class="stages-line">
        <div class="stages-points">
          <div class="point">
            <div class="first-pt"><h3>1</h3></div>
            <h3>ВАШ ЗАПРОС</h3>
          </div>
          <div class="point">
            <div class="second-pt"><h3>2</h3></div>
            <h3>ОБСУЖДЕНИЕ</h3>
          </div>
          <div class="point">
            <div class="third-pt"><h3>3</h3></div>
            <h3>НАШ РЕСЕРЧ</h3>
          </div>
          <div class="point">
            <div class="fourth-pt"><h3 >4</h3></div>
            <h3>ПРЕДЛОЖЕНИЕ</h3>
          </div>
          <div class="point">
            <div class="last-pt"><img src="../assets/home/done.png"></div>
            <h3>ЛУЧШЕЕ МЕРОПРИЯТИЕ НА ВАШ БЮДЖЕТ!</h3>
          </div>
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
  h1{
    letter-spacing: .03em;
  }
  h2{
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  h3{
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  .hero{
    background-image: url(../assets/home/home_hero.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container{
    padding: 0 230px;
  }
  .first-btn{
    @extend %first-btn;
  }
  .second-btn{
    display: flex;
    align-items: center;
    gap: 10px;
    @extend %second-btn;
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
            font-weight: 200;
            font-size: 14px;
            color: #F3F3F3;
          }
          h3{
            font-family: "Roboto Flex";
            font-weight: 600;
            font-size: 24px;
            opacity: 0.9;
          }
        }
      }
      p{
        font-family: "Manrope";
        font-weight: 400;
        font-size: 18px;
        color: #48484B;
      }

    }
  }
    
  #Golden_prison{
    background-image: url(../assets/home/golden_prison.png);
    background-size: cover;
    background-repeat: no-repeat;
    .container{
      display: flex;
      justify-content: right;
    }
    .prison-wrapper{
      display: flex;
      padding: 140px 0;
      flex-direction: column;
      height: 780px;
      width: 636px;
      justify-content: space-between;

      .prison-text{
        display: flex;
        flex-direction: column;
        h2{
          font-size: 36px;
          font-weight: 600;
          line-height: 52px;
          letter-spacing: .03em;
          opacity: .9;
        }
        p{
          font-size: 18px;
          font-weight: 400;
          color: #F3F3F3;
        }
        p:nth-child(1){
          display: flex;
          gap: 2px;
          align-items: center;
          margin-bottom: 16px;
        }
        p:nth-child(3){
          margin-top: 8px;
        }
        p:nth-child(4){
          font-weight: 300;
          letter-spacing: .03em;
          margin-top: 32px;
        }
      }
      .prison-button{
        display: flex;
        gap: 16px;
      }
    }
  }
  .organization_wrapper{
    padding-top: 180px;
    padding-bottom: 180px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    h2{
      font-size: 36px;
      font-weight: 600;
      color: #F3F3F3;
      opacity: .9;
    }
    .stages{
      .stages-line{
        width: 80%;
        background: linear-gradient(to right,#F86F03,#3E230B 23%,#3E230B 83%,#F86F03);
        height: 5px;
        border: none;
        margin-left: 21px;
        margin-bottom: -22px;
      }
      .stages-points{
        display: flex;

        .point{
          width: 20%;
          div{
            width: 42px;
            height: 42px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h3{
              color: #F3F3F3;
              font-size: 20px;
              font-weight: 600;
              opacity: .9;
            }
          }
          .first-pt{
            background: #CF5B00;
          }
          .second-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .third-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .fourth-pt{
            background: linear-gradient(#46290F,#321505);
          }
          .last-pt{
            background: #CF5B00;
          }
        }
      }
    }
  }
    
</style>