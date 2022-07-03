<template>
       <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/kreiraj-korisnika">Kreiraj menadzera/dostavljaca</router-link></li>
          <li><router-link to="/korisnici">Pregled korisnika</router-link></li> 
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default{
  name: "AdminNavBar"
}
  
</script>