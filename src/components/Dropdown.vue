<template> 
  <div class="menu" >

    <router-link to="/" class="title">
        {{ title }}
        <svg viewBox="0 0 1030 638" width="15">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#000"></path>
        </svg>
    </router-link>
    
    <div class="sub-menu">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: String,
        items: Array,
    },
});
</script>

<style lang="scss">

.menu {
    position: relative;
    cursor: pointer;
    z-index: 10;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 15px;
            margin-top: 3px;
            margin-left: 5px;
            transform: rotateZ(0deg);
            transition: 0.3s ease-out;  
        }
    }

    .sub-menu {
        position: absolute;
        display: none;
        min-width: 200px;
        box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
        border-top: 1px solid #e0e0e0;
    }



    &:hover{
        
        .title svg {
            transform: rotateZ(180deg);
        }

        .sub-menu {
            display: block;

            .menu-item {
                display: flex;
                a {
                    padding: 10px 0px 10px 5px;
                    min-width: 100%;
                    text-decoration: none;
                    border: none;
                    border-top: 1px solid #e0e0e0;

                    &:first-child {
                        border-top: none;
                    }

                    &:hover {
                        background-color: #f0f0f0;
                    }
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
