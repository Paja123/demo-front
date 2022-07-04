<template>
       <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/dostavljac-profil">Moj profil</router-link></li>
          <li><router-link to="/ceka-dostavljaca">Dostupne porudzbine</router-link></li> 
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default{
  name: "DostavljacNavBar"
}
  
</script>