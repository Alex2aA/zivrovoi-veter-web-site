<template>
  <header class="main-header">
    <div class="main-header-item">Консультация</div>
    <div class="main-header-item" @click="$router.push('/')" >О нас</div>
    <div class="main-header-item" @click="$router.push('/specialstes')">Специалисты</div>
  </header>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .main-header
  {
    width: 100%;
    height: 100px;
    background-color: #171A21 ;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 15px;
    padding-left: 0px;
    padding-right: 0px;

  }

  li
  {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    color: #EDDDD4;
  }

  div
  {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    color: #EDDDD4;
  }

  h1
  {
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    color: #EDDDD4;
  }

  h2{
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    color: #EDDDD4;
  }

  .main-header-item
  {
    font-size: 30px;
    transition: 0.2s;
  }

  .main-header-item:hover
  {
    text-decoration: underline;
    scale: 1.1;
    transition: 0.2s;
  }

  html,body,#app 
  {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  background-color: #197278;
  }
</style>
