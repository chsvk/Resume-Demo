<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Android Development</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odit, nulla ratione harum alias eaque nobis voluptas quasi ducimus cumque at error saepe nisi ipsum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia, repudiandae laborum eum explicabo officiis.</p>
    </div>
    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .img1{
    background: url('../assets/home.jpg')
  }

</style>
