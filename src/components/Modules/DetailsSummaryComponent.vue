<script>
export default {
  data() {
    return {
      items: [
        { title: 'Как расчитать стоимость', content: 'Но, как видите, один элемент не закрывается когда открывается другой. Чтобы добиться этого нам понадобится пара строк JavaScript' },
        { title: 'Как расчитать стоимость', content: 'Но, как видите, один элемент не закрывается когда открывается другой. Чтобы добиться этого нам понадобится пара строк JavaScript' },
        { title: 'Как расчитать стоимость', content: 'Но, как видите, один элемент не закрывается когда открывается другой. Чтобы добиться этого нам понадобится пара строк JavaScript' },
        { title: 'Как расчитать стоимость', content: 'Но, как видите, один элемент не закрывается когда открывается другой. Чтобы добиться этого нам понадобится пара строк JavaScript' },
        { title: 'Как расчитать стоимость', content: 'Но, как видите, один элемент не закрывается когда открывается другой. Чтобы добиться этого нам понадобится пара строк JavaScript' },
      ].map((item, index) => ({ ...item, isOpen: index === 0 })),
      openIndex: null,
      oldIndex: null,
    };
  },
  methods: {
    handleToggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<template>
   <div id="drop-down">
      <details v-for="(item, index) in items" :open="openIndex == index" class="details" :class="{ 'open': openIndex == index }">
         <summary @click.prevent="handleToggle(index)">
            <p>{{ item.title }}</p>
            <img src="../../assets/about/plus.png" class="rotatiable">
         </summary>
         <p v-if="openIndex === index" class="summary__content">{{ item.content }}</p>
      </details>
   </div>
 </template>
 
 <style scoped lang="scss">
   .details{
      width: 635px;
      border-top: rgba(255, 255, 255, 0.1) 1px solid;
      font-family: 'Manrope';
      letter-spacing: 0.03em;

      summary{
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
      }
      .summary__content{
         font-size: 15px;
         color: rgba(255, 255, 255, 0.8);
         padding-bottom: 17px;
         padding-left: 5px;
      }
   }

   .details:nth-child(5){
      border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
   }
</style>