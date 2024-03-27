<script>

</script>

<template>
  <header>
    <div class="header-logo">
      <router-link class="header-name" :to="{ name: 'Home' }"><img src="./assets/logoText.png"></router-link>
    </div>

    <div class="header-links">
      <router-link :to="{ name: 'Coop' }">Корпоративы</router-link>
      <router-link :to="{ name: 'BTL' }">BTL</router-link>
      <router-link :to="{ name: 'BTL' }">Галерея</router-link>
      <router-link :to="{ name: 'BTL' }">О нас</router-link>
      <router-link :to="{ name: 'BTL' }">Контакты</router-link>
    </div>
    <div class="header-contacts">
      <a href="tel:+375296677654" class="header-contact-item">
        <img src="./assets/phone.png">
        +375 (29) 667 76  54
      </a>
      <a href="mailto:eventer@gmail.com" class="header-contact-item">
        <img src="./assets/mail.png">
        eventer@gmail.com
      </a>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss" scoped>
  header{
    background-color: rgba(10, 10, 11, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
    height: 62px;
    align-items: center;

    a{
      text-decoration: none;
      color: white;
    }
  
    .header-logo{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 105px;
    }

    .header-links{
      display: flex;
      gap: 24px;

      a{
        font-size: 14px;
        font-weight: 400;
      }
    }

    .header-contacts{
      display: flex;
      flex-direction: column;

      a{
        font-size: 14px;
        font-weight: 300;

        img{
          width: 10px;
          margin-right: 8px;
        }
      }
    }
  }
</style>
