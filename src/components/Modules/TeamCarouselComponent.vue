     <!--<Slide v-for="slide in 10" :key="slide">
       <div class="carousel__item">{{ slide }}</div>
     </Slide>-->
<template>
   <Carousel :itemsToShow="3.90" :wrapAround="true" :transition="500" :autoplay="5000">
     <Slide v-for="(slide, index) in slides" :key="index" :class="['slide-' + (index + 1)]">
      <div class="carousel__item">
         <div class="image">
          <p>{{ slide.title }}</p>
          <h2>{{ slide.name }}</h2>
        </div>
        <div class="item__footer">
          <p>{{ slide.quote }}</p>
        </div>
      </div>
    </Slide>
     <template #addons>
      <Navigation />
    </template>
   </Carousel>
 </template>
 
 <script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
   return{
      slides: [
        { name: '1 Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '2 Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '3 Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '4 Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '5 Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '6 Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '7 Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '8 Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '9 Ольга', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
        { name: '10 Евгений', title: 'Основатель EVENTER', quote: 'Мы стремимся к большему. каждый раз путь становится только интеренсее! Новые знакомства,' },
      ],
   }
  },
  methods: {
  },
})
 </script>
 
<style scoped>
   .carousel__item{
      width: 400px;
      background-color: #141419;

      .image{
         height: 505px;
         background-size: cover;
         display: flex;
         flex-direction: column-reverse;

         h2{
            text-align: left;
         }
      }
   }

   .slide-1 .image, .slide-5 .image, .slide-9 .image {
      background: url('../../assets/about/carousel/1.png');
   }

   .slide-3 .image, .slide-7 .image{
      background: url('../../assets/about/carousel/4.jpg');
   }

   .slide-2 .image, .slide-6 .image, .slide-10 .image  {
      background: url('../../assets/about/carousel/2.png');
   }

   .slide-4 .image, .slide-8 .image{
      background: url('../../assets/about/carousel/3.png');
   }

   .carousel__slide {
      padding: 5px;
   }
 
   .carousel__viewport {
      perspective: 2000px;
   }
   
   .carousel__track {
      transform-style: preserve-3d;
   }
   
   .carousel__slide--sliding {
      transition: 0.5s;
   }
   
   .carousel__slide {
      opacity: 0.9;
      transform: rotateY(-20deg) scale(0.9);
   }
   
   .carousel__slide--active ~ .carousel__slide {
      transform: rotateY(20deg) scale(0.9);
   }
   
   .carousel__slide--prev {
      opacity: 1;
      transform: rotateY(-10deg) scale(0.95);
   }
   
   .carousel__slide--next {
      opacity: 1;
      transform: rotateY(10deg) scale(0.95);
   }
   
   .carousel__slide--active {
      opacity: 1;
      transform: rotateY(0) scale(1.01);
   }
 </style>
 