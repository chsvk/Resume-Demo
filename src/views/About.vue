<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About Page</h1>
      <p class="subtxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, neque.</p>
      <button><router-link to="/portfolio/one">My Work</router-link></button>
    </div>
    <div class="right-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam quis dolor possimus repellendus quia quibusdam ipsum porro alias iure.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .left-content{
    background-color: #ffe476;
  }

  .right-content{
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  button{
    font-size: 1.5em;
    margin-top: 100px;
  }

  .subtxt{
    font-size: 1.5em;
    margin-top: 30px;
  }

</style>
