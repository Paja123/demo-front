<template>
    <AdminNavBar />
    <h3>Pregled svih korisnika</h3>
    <table>
        <tr>
            <th>Korisnicko ime</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Uloga</th>
            <th>Pol</th>
            <th>Datum rodjenja</th>
        </tr>
        <tr v-for="korisnik in korisnici" :key="korisnik.id">
            <td>{{korisnik.korisnickoIme}}</td>
            <td>{{korisnik.ime}}</td>
            <td>{{korisnik.prezime}}</td>
            <td>{{korisnik.uloga}}</td>
            <td>{{korisnik.pol}}</td>
            <td>{{korisnik.datumRodjenja}}</td>
        </tr>
    </table>
</template>

<script>
import AdminNavBar from '@/components/AdminNavbar.vue'
export default{
    data: function(){
        return{
            korisnici:[]
        }
    },
    components:{AdminNavBar},
    mounted(){
         fetch('http://localhost:8081/api/korisnici', {credentials:"include"})
            .then(response => response.json())
            .then(data => {console.log("Success:", data);
                this.korisnici = data
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}
</script>