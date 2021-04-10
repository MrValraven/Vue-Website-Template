<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f7;
  
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
  opacity: 0.75;
  color: #2c3e50;
  transition: color 0.25s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
}
nav, ul, li {
  list-style-type: none;
}
hr {
  width: 100px;
  background: red;
  border: 1px solid red;
  margin: 5px 0px;
}
</style>