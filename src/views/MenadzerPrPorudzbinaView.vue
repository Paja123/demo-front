<template>
    <h1 v-if="menadzer.restoran">Restoran {{menadzer.restoran.naziv}}</h1>
    <h6 v-if="menadzer.restoran">Adresa:  {{menadzer.restoran.lokacija.adresa}}</h6>


    <h2>Porudzbine</h2>
    <table>
        <tr>
          <th>ID porudzbine</th>
          <th>Cena</th>
          <th>Datum i vreme</th>
          <th>Status</th>
        </tr>
        <tr v-for="porudzbina in porudzbine" :key="porudzbina.id">
          <td>{{ porudzbina.id }}</td>
          <td>{{ porudzbina.cena }}</td>
          <td>{{ porudzbina.datum }}</td>
          <td>{{ porudzbina.status }}</td>
        </tr>
    </table>
    
</template>


<script>
export default{
    name: "MenadzerPrPorudzbinaView",
    data: function(){ 
        return{
            porudzbine:[],
            menadzer: {}

        }
    },
    mounted: function(){
          fetch('http://localhost:8081/api/pregled-porudzbina/', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.porudzbine = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });

            fetch('http://localhost:8081/api/profil/', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.menadzer = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }
}
</script>