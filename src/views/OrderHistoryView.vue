<template>
        <NavBar />
    <div v-for="porudzbina in porudzbine" :key="porudzbina.id">
        <p>ID porudzbine: {{porudzbina.id}}</p>
        <!-- <p v-if="porudzbina.restoran">{{porudzbina.restoran.naziv}}</p> -->
        <p>Cena: {{porudzbina.cena}}</p>
        <p>Stanje porudzbine: {{porudzbina.statusPorudzbine}}</p>
        <p>Poruceni artikli:</p>
        <div v-for="stavkaPorudzbine in porudzbina.poruceniArtikli" :key="stavkaPorudzbine.id">
            <p v-if="stavkaPorudzbine.poruceniArtikal">{{stavkaPorudzbine.poruceniArtikal.naziv}}: {{stavkaPorudzbine.porucenaKolicina}} kom.</p>
        </div>
    </div>
    
</template>

<script>
import NavBar from "@/components/Navbar.vue" ;
export default{
    data: function(){
        return{
            porudzbine:[]
        }
    },
    components:{
        NavBar
    },
    mounted(){
         fetch('http://localhost:8081/api/sve-porudzbine/', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.porudzbine = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}
</script>