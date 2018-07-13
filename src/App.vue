<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">CHSVK</router-link>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/About">About</router-link></li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
      
      </div>
    </div>
  </div>
</template>



<style lang="scss" src="./global.scss">

</style>
