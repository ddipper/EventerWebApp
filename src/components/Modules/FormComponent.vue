<script>
export default {
   data() { 
      return{
         hoverColor: '',
      }
   },
   name: 'FormComponent',
   props: ['color'],
   computed: {
      buttonColor() {
         if (this.color == 'orange') {
            this.hoverColor = '#3B49D3';
            return '#D85F00';
         } else if (this.color == 'blue') {
            this.hoverColor = '#D85F00';
            return '#3B49D3';
         } else {
            this.hoverColor = this.color;
            return this.color;
         }
      }
   },
   methods: {
    redirect() {
      //TODO EDIT TG LINK
      window.open('https://t.me/dd3vq', '_blank');
    }
  }
}
</script>

<template>
   <form :style="{'--button-color': buttonColor, '--button-hover-color': hoverColor}">
      <input type="text" id="name" name="name" placeholder="Ваше имя">
      <input type="text" id="organisation" name="organisation" placeholder="Организация">
      <input type="email" id="email" name="email" placeholder="Email">
      <div class="input-container">
         <input type="tel" id="tel" name="tel" placeholder="(99) 999 99-99">
      </div>
      <button class="first-btn">Заказать звонок</button>
      <button class="second-btn" @click="redirect()" type="button">Telegram<img v-if="color == 'orange'" src="../../assets/home/tg.btn-icon.png"></button>
   </form>
</template>

<style lang="scss" scoped>
   .first-btn{
      margin-top: 20px;
      padding: 15px 30px;
      background-color: var(--button-color);
      border: 1px solid var(--button-color);
      border-radius: 2px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      color: #F3F3F3;
      font-family: "Roboto Flex", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s;
      &:hover{
         background-color: var(--button-hover-color);
         border-color: var(--button-hover-color);
         transition: 0.5s;
      }
   }
   .second-btn{
      padding: 15px 30px;
      background-color: #D0D0D0;
      border: 1px solid #D0D0D0;
      border-radius: 2px;
      color: var(--button-color);
      font-family: "Roboto Flex", sans-serif;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
   }

   input{
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      padding: 12px 16px;
      width: 100%;
      &:hover{
         border-color: white;
      }
      &:focus, &:active{
         border-color: var(--button-color);
         outline: 0;
         outline-offset: 0;
      }
   }
   
   .input-container {
      width: 100%;
      position: relative;

      input{
         padding-left: 45px;
      }

      &:before {
         content: "+375";
         font-family: 'Roboto', sans-serif;

         font-size: 14px;
         position: absolute;
         left: 10px;
         top: 50%;
         transform: translateY(-50%);
      }
   }

   form{
      width: 470px;
      display: flex;
      flex-direction: column;
      gap: 12px;
   }

</style>