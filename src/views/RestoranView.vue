<template>
  <NavBar />
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
            <button @click="dodajUKorpu" v-bind="korpaDto.artikal" class="waves-effect waves-light btn-large">Dodaj u korpu</button>
        </div>
        <div>
            <button><a @click="toggleSidebar" data-target="slide-out" class="sidenav-trigger">menu</a></button>      

        </div>
      </div>
    </div>
    </div>
  </section>

  
    <ul v-if="showSidebar" id="slide-out" class="sidenav sidenav-fixed">
    <!-- <li><i class="materialize-icons">exit_to_app</i></li> -->
    <li style="float: right"><a @click="toggleSidebar" >Zatvori</a></li>
    <!-- <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li> -->
    <table>
      <thead>
        <tr>
          <th>Proizvod</th>
          <th>Cena</th>
          <th>Kol.</th>
          <th>Ukupno</th>
          <th><span class="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </ul>
  
        
</template>
<script>
import NavBar from '@/components/Navbar.vue'
import M from 'materialize-css'

export default {
    name: 'RestoranView',
    // props: ['inventory', 'addToCart'],
  // components: {
  //   ProductCard
  // },
    data: function() {
        return {
            showSidebar: false,
            restoran: {},
            korpaDto: {
              artikal:{},
              kolicina: 10
            }
        }
      },
    components:{NavBar},
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
    },
    methods:{
      toggleSidebar(){
        this.showSidebar = !this.showSidebar
      },
      dodajUKorpu(){
           fetch('http://localhost:8081/api/dodaj-u-korpu', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.artikal),
      })
        
        .then((response) => response.json)
        .then((data) => {
          console.log("Success : " + data);
          console.log("Success : " + this.korpaDto);
        })
        .catch((error) => {
                console.error("Error:", error);
            });
    
  
      }
    }
}
</script>
<style>
</style>