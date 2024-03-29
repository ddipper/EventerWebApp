<script setup>

</script>

<template>
   <router-veiw/>
   <div class="content">
      <div class="contacts">
         <h2>Контакты</h2>
         <div class="socials">
            <a href="tel:+375296677654" class="footer-contact-item">
               <img src="../assets/phone.png">
               +375 (29) 667 76  54
            </a>
            <a href="mailto:eventer@gmail.com" class="footer-contact-item">
               <img src="../assets/mail.png">
               eventer@gmail.com
            </a>
            <a href="t.me_eventer" class="footer-social-item">
               <img src="../assets/telegram.png">
               t.me_eventer
            </a>
         </div>
      </div>

   </div>
</template>

<style scoped lang="scss">
   .content {
      min-height: calc(100vh - 199px);
      background: #0D0D0F;
   }
</style>