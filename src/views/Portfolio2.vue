<template>
  <div class="Two main-content">
    <div class="left-content slideUp">
      <h1>Portfolio Two</h1>
      <router-link to="/portfolio/one"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ch.Vamshi Krishna</p>
      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, in!</p>
      <router-link to="/portfolio/three"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
      
      </div>
    <div class="right-content img2">
      <!-- <img src="../assets/logo.svg"> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Two',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page_color: #48b886;

  h1{
    color: $page_color !important;
  }

  .img2{
    background: url('../assets/phone.jpg');
    background-size: cover;
    background-position: 50%;

    img{
      width: 50%;
    }

  }

.arrow-up{
  display: block;
  float: right;
  width: 43px;
  height: 43px;
}


</style>
