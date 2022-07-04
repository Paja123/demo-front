<template>
    <DostavljacNavBar />
    <h6>Korisnicko ime: {{dostavljac.korisnickoIme}}</h6>
    <h6>Ime: {{dostavljac.ime}}</h6>
    <h6>Prezime: {{dostavljac.prezime}}</h6>
    <h6>Datum rodjenja: {{dostavljac.datumRodjenja}}</h6>
    <h6>Pol: {{dostavljac.pol}}</h6>

    <h3>Moje dostave:</h3>
    <table>
         <tr>
          <th>ID porudzbine</th>
          <th>Cena</th>
          <th>Datum i vreme</th>
          <th>Status</th>
        </tr>
        <tr v-for="porudzbina in dostavljac.porudzbineZaDostavu" :key="porudzbina.id">
          <td>{{ porudzbina.id }}</td>
          <td>{{ porudzbina.cena }}</td>
          <td>{{ porudzbina.datum }}</td>
          <td>{{ porudzbina.status }}</td>
          <td><button @click="dostavljeno(porudzbina)">Dostavljeno</button></td>
        </tr>
    </table>
</template>


<script>
import DostavljacNavBar from '@/components/DostavljacNavBar.vue'
export default{
    name: "DostavljacProfilView",
    data: function(){
        return{
            dostavljac:{
                korisnickoIme:"",
                ime:"",
                prezime:"",
                datumRodjenja:"",
                pol:"",
                porudzbineZaDostavu:[],
            },
        }
    },
    components:{DostavljacNavBar},
     mounted(){
            fetch('http://localhost:8081/api/profil', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.dostavljac = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            console.log(this.dostavljac.korisnickoIme)
            fetch('http://localhost:8081/api/dostavljac/porudzbine/', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.dostavljac.porudzbineZaDostavu = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });
     },
     methods:{
        dostavljeno(porudzbina){
             fetch("http://localhost:8081/api/dostavljac/promeni-status/" + porudzbina.id, {
                    method: "PUT",
                    credentials: 'include',
                    headers: {Accept: "application/json",
                    "Content-type": "application/json",
                    },
                    
                })
                    .then((response) => response.json)
                    .then((data) => {
                    console.log("Success");
                    porudzbina.status = "Dostavljena"
                    })
                    .catch((err) => {
                    console.log("Error : " + err);
                    alert(err);
                    });
        }
     }
}
</script>