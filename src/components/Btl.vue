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
  <section id="WhatIs">
    <div class="container">
      <div class="what-title">
        <div>
          <img src="../assets/BTL/icon2.png" alt="">
        </div> 
        <h2>Что такое BTL?</h2>
      </div>
      <div>
        <p>
          BTL - это инструменты непрямой рекламы, направленные на продвижение товара/услуги и на создание положительного имиджа бренда.
        </p>
        <div>
          <h3>Виды BTL инструментов:</h3>
          <div id="drop-down">
            <details v-for="(item, index) in items" :open="openIndex == index" class="details" :class="{ 'open': openIndex == index }">
                <summary @click.prevent="handleToggle(index)">
                  <p>{{ item.title }}</p>
                  <img src="../assets/about/plus.png" class="rotatiable">
                </summary>
                <p v-if="openIndex === index" class="summary__content">{{ item.content }}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonsComponent from './Modules/ButtonsComponent.vue'
  export default{
      data(){
        return{
          hoverColor: '',
         items: [
            { title: 'Промо-акции', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Презентации', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Конференции', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Выставки', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Дегустации', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Интерактивные зоны', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            { title: 'Промоутеры', content: 'А я сам хз, там пропорции какие-то и тд и тп. В общем сложная вся эта штука, лучше не рассчитывать, а просто дать мне денег, карту могу дать в лс в телеге @ddipperq' },
            ].map((item, index) => ({ ...item, isOpen: index === 0 })),
         openIndex: null,
         oldIndex: null,
        };
      },
      components:{
        ButtonsComponent
      },
    methods: {
      handleToggle(index) {
         this.openIndex = this.openIndex === index ? null : index;
      },
      redirect() {
         window.open(`${import.meta.env.VITE_TELEGRAM_LINK}`, '_blank');
      },
   },
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
  .details{
      width: 635px;
      border-top: rgba(255, 255, 255, 0.1) 1px solid;
      font-family: 'Manrope';
      letter-spacing: 0.03em;

      summary{
         user-select: none;
         width: 100%;
         list-style: none;
         font-size: 18px;
         padding: 17px 0;
         display: flex;
         justify-content: space-between;
         align-items: center;

         &::-webkit-details-marker {
            display: none;
         }

         img{
            width: 21px;
            height: 21px;
         }
         &:hover{
            cursor: pointer;
         }
      }
      .summary__content{
         font-size: 15px;
         color: rgba(255, 255, 255, 0.8);
         padding-bottom: 17px;
         padding-left: 5px;
      }
      &.open {
         summary {
            img {
               transition: transform 0.3s ease-in-out;
               transform: rotate(45deg);
            }
         }
      }
      &:not(.open) {
         summary {
            img {
               transition: transform 0.3s ease-in-out;
               transform: rotate(0deg);
            }
         }
      }
   }

   .details:nth-child(5){
      border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
   }
</style>