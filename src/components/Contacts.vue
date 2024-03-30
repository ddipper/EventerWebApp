<script>
export default {
  data() {
    return {
      name: '',
      organization: '',
      email: '',
      phone: '',
    }
  }
}
</script>

<template>
   <router-veiw/>
   <div class="content">
      <div class="contacts">
         <h2>Контакты</h2>
         <div class="socials">
            <a href="tel:+375296677654" class="footer-contact-item">
               <img src="../assets/ContactPhone.png">
               +375 (29) 162-55-89
            </a>
            <a href="mailto:eventer@gmail.com" class="footer-contact-item">
               <img src="../assets/ContactMail.png">
               eventerby@gmail.com
            </a>
            <a href="t.me_eventer" class="footer-social-item">
               <img src="../assets/ContactTelegram.png">
               t.me_eventer_by
            </a>
         </div>
         <v-form>
            <v-text-field v-model="name" class="input" label="Ваше имя" variant="outlined"></v-text-field>
            <v-text-field v-model="organization" class="input" label="Организация" variant="outlined"></v-text-field>
            <v-text-field v-model="email" class="input" label="Email" variant="outlined"></v-text-field>
            <v-text-field v-model="phone" class="input" variant="outlined" placeholder="(99) 999 99 99">
               <template v-slot:prepend-inner>
                  <span>+375 </span>
               </template>
               <template v-slot:placeholder>
                  <span>Email</span>
               </template>
            </v-text-field>
            <button class="first-btn">Заказать звонок</button>
            <button class="second-btn">Telegram<img src="../assets/home/tg.btn-icon.png"></button>
         </v-form>
      </div>
      <div class="location">
         <div class="location-text">
            <img src="../assets/location.png">
            <h3>ул. Матусевича 32</h3>
         </div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.0430315773453!2d27.47466532919199!3d53.91693756892977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc53ae5857d27%3A0xb6fea345cd9975e!2s32%2C%20vulica%20Matusievi%C4%8Da%2032%2C%20Minsk%2C%20Minsk%20Region%20222000!5e0!3m2!1sen!2sby!4v1711735708885!5m2!1sen!2sby" width="802" height="516" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

   </div>

</template>

<style scoped lang="scss">
   .content {
      min-height: calc(100vh - 199px);
      background: #0D0D0F;
   }

   .first-btn{
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
   .second-btn{
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

   .content{
      padding: 0 64px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .contacts{
         display: flex;
         flex-direction: column;
         gap: 50px;

         h2{
            font-family: "Roboto Flex", sans-serif;
            font-weight: 600;
            font-size: 32px;
            text-transform: uppercase;
         }

         .socials{
            display: flex;
            flex-direction: column;
            gap: 14px;

            a{
               text-decoration: none;
               color: white;
               font-size: 18px;
               font-weight: 300;

               &:nth-child(1) img{
                     width: 12px;
               }
               &:nth-child(2) img{
                     width: 14px;
               }
               &:nth-child(3) img{
                     width: 16px;
               }

               img{
                  margin-right: 10px;
               }
            }
         }

         form{
            .input {
               width: 470px;
               font-family: 'Roboto', sans-serif;
               font-size: 100px;


               &:focus {
                  border: 1px solid;
               }
            }
         }
      }
   }

</style>