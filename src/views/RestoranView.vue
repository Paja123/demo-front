<template>
  <div>
    <h1>{{restoran.naziv}}</h1>
    <h2>{{restoran.tip}}</h2>
    <h2 v-if="restoran.lokacija">{{restoran.lokacija.adresa}}</h2>
    <h2>Prosecna ocena: {{restoran.prosecnaOcena}}</h2>
    <h2>komentari</h2>
    <div v-for="komentar in restoran.komentari" :key="komentar.id" >
        {{komentar.tekst}}
    </div> 
  </div>
  <section class="fcards">
    <div class="row" style="padding-left: 50px; padding-right: 50 px;">
      <div v-for="artikal in restoran.ponuda" :key="artikal.id" class="col s12 m12 l4" style="padding: 50px 5px;">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="../assets/giros.jpg">
        </div>
          <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{{artikal.naziv}}<i class="material-icons right">opis</i></span>
          <p>cena: {{artikal.cena}} din</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{{artikal.naziv}}<i class="material-icons right">zatvori</i></span>
          <p>{{artikal.opis}}</p>
        </div>
        <div class="card-action">
            <button class="waves-effect waves-light btn-large">Dodaj u korpu</button>
        </div>
      </div>
    </div>
    </div>
  </section>

  
  <!-- <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
         -->
</template>
<script>
//import ProductCard from '@/components/ProductCard.vue'
import M from 'materialize-css'
//import axios from "axios";
export default {
    name: 'RestoranView',
    // props: ['inventory', 'addToCart'],
  // components: {
  //   ProductCard
  // },
    data: function() {
        return {
            restoran: {},
        }
      },
    mounted: function() {
        /*axios
            .get("http://localhost:8081/api/employees/" + this.$route.query.id)
            .then((res) => {
                this.employee = res.data
            })
            .catch((err) => {
                console.log(err)
            })*/

        fetch('http://localhost:8081/api/restorani/' + this.$route.query.naziv)
            .then(response => response.json())
            .then(data => {console.log("Success:", data); this.restoran = data; })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}
</script>
<style
>
</style>