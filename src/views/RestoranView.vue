<template>
  <div>
    <h1>{{restoran.naziv}}</h1>
    <h2>{{restoran.tip}}</h2>
    <!-- <h2 >{{restoran.adresa}}</h2> -->
    <h2>Prosecna ocena: {{restoran.prosecnaOcena}}</h2>
    <h2>komentari</h2>
    <div v-for="komentar in restoran.komentari" >
        {{komentar.tekst}}
    </div> 
  </div>
</template>
<script>
//import ProductCard from '@/components/ProductCard.vue'

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
