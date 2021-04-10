<template>

  <header class="header">
    <nav id="nav">
      <div class="logo">
              <router-link class="logoName" to="/">
                  <img src="#" alt="">
              </router-link>
          </div>
      <ul>
        <li><router-link class="navLinks" to="/">Home</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Notícias</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Discursos</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Eventos</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Associação</router-link></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Serviços</router-link></li>
        <li><Dropdown title="Dropdown" :items="services" /></li>
        <li><router-link class="navLinks" :to="{ name: 'Home' }">Contactos</router-link></li>
      </ul>
	  </nav>
  </header>
    
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dropdown from '@/components/Dropdown.vue';
export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      services: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link:'#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  },
  components: { 
    Dropdown,
  }
});
</script>

<style lang="scss">
.header {
  position: absolute;
	z-index: 10;
	width: 100%;
	opacity: 1;
	color: #fff;
	padding: 35px 100px 0;
  #nav {
    display: flex;
    justify-content: space-between;
    .logo {
      a {
        opacity: 1;
      }
      img {
        width: 200px;
        position: absolute;
        top: 15px;
        left: 40px;
      }
    }
    ul {
      display: flex;
      justify-content: space-around;
      li {
        padding: 10px;
        font-size: 22px;
        a {
          font-weight: bold;
          color: #000000;
          &.router-link-exact-active {
            border-bottom: 1px solid black;
          }
        }  
      }
    }
  }
}
</style>