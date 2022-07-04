<template>
    <DostavljacNavBar />
    <h3>Porduzbine u statusu: ceka dostavljaca</h3>
    <div>
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
           <td><button @click="preuzmi(porudzbina)" >Preuzmi</button></td>
        </tr>
    </table>
    </div>
</template>

<script>
import DostavljacNavBar from '@/components/DostavljacNavBar.vue';
export default{
    name: "CekaDostavljacaView",
    data: function(){
        return{
            porudzbine:[],
        }
    },
    components:{DostavljacNavBar},
     mounted: function(){
          fetch('http://localhost:8081/api/ceka-dostavljaca/', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.porudzbine = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    },
    methods:{
        preuzmi(porudzbina){
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
                    // if (data =="korisnicko ime nije slobodno"){
                    //     alert("korisnicko ime nije slobodno!")
                    // }
                     this.$router.push("/ceka-dostavljaca");
                    })
                    .catch((err) => {
                    console.log("Error : " + err);
                    alert(err);
                    });
        }
    }

}
</script>