<script>

</script>

<template>
  <header>
    <div class="header-logo">
      <router-link class="header-name" :to="{ name: 'Home' }">Eventer</router-link>
      <img src="./assets/logo.png">
    </div>

    <div class="header-links">
      <router-link :to="{ name: 'Coop' }">Корпоративы</router-link>
      <router-link :to="{ name: 'BTL' }">BTL</router-link>
      <router-link :to="{ name: 'BTL' }">Галерея</router-link>
      <router-link :to="{ name: 'BTL' }">О нас</router-link>
      <router-link :to="{ name: 'BTL' }">Контакты</router-link>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss" scoped>
  header{
    background-color: #100f11;
    display: flex;
    justify-content: space-around;

    a{
      text-decoration: none;
      color: white;
    }

    .header-logo{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 105px;

      a{
      text-decoration: none;
      color: white;
      font-size: 20px;
      font-weight: 600;
      }

      img{
        height: 17px;
      }
    }

    .header-links{
      width: 40%;
      display: flex;
      justify-content: space-around;

      a{
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
</style>
