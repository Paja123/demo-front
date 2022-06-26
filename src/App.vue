<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
      <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/restorani">Pregled restorana</router-link></li>
          <!-- <li><router-link to="/">Istorija porudzbina</router-link></li> -->
          <!-- <li><router-link to="/restorani">Korpa</router-link></li> -->
        </ul>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<script>
 //import Sidebar from '@/components/Sidebar.vue'

</script>
