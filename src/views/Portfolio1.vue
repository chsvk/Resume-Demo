<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ch.Vamshi Krishna</p>
      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, in!</p>
      <router-link to="/portfolio/two"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
      </div>
    <div class="right-content img2">
      <img src="../assets/logo.svg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'One',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page_color: #625B7e;

  h1{
    color: $page_color !important;
  }

  .img2{
    background: $page_color;

    img{
      width: 50%;
    }

  }



</style>
