<template>
    
     <div >
        <label>Korisnicko ime</label>
            <input type="text" v-model="korisnik.korisnickoIme" placeholder="Korisnicko ime" id="korisnicko-ime" />
            <label>Lozinka</label>
            <input type="password" v-model="korisnik.lozinka" placeholder="Lozinka"  id ="lozinka"/>
            <label>Ime</label>
            <input type="text" v-model="korisnik.ime" placeholder="Ime" id ="ime" />
            <label>Prezime</label>
            <input type="text" v-model="korisnik.prezime" placeholder="Prezime" id ="prezime" />

            <label for="start">Start date:</label>

            <input v-model="korisnik.datumRodjenja" type="date" id="start" name="trip-start" 
                min="1944-01-01" max="2010-01-01">

            <h6>Pol</h6>
            <form action="#" >
            <p>
            <label>
                <input  type="radio" v-model="korisnik.pol" value="muski"  checked />
                <span>Muski</span>
            </label>
            </p>
            <p>
            <label>
                <input  type="radio" v-model="korisnik.pol" value="zenski"  />
                <span>Zenski</span>
            </label>
            </p>
            </form>

            <form action="#" >
            <p>
            <label>
                <input  type="radio" v-model="korisnik.uloga" value="Menadzer"  checked />
                <span>Menadzer</span>
            </label>
            </p>
            <p>
            <label>
                <input  type="radio" v-model="korisnik.uloga" value="Dostavljac"  />
                <span>Dostavljac</span>
            </label>
            </p>
            </form>
          <button @click="registracija" id="registracija">Registracija</button>
          <p>
            <!-- <router-link to="/registracija">Registracija</router-link> -->
          </p>
       </div>
</template>

<script>
export default{
      name: "KreirajMenDosView",
    data: function () {
    return {
        korisnik: {
            korisnickoIme: "",
            pol: "muski",
            lozinka: "",
            ime:"",
            prezime:"",
            datumRodjenja: "",
       },
    };
   
    },
    methods: {
        registracija() {
            var prKorisnickoIme = document.getElementById('korisnicko-ime').value;
            var prLozinka = document.getElementById('lozinka').value;
            var prIme = document.getElementById('ime').value;
            var prPrezime = document.getElementById('prezime').value;
            var prDatumRodjenja = document.getElementById('start').value;

            
            if (prKorisnickoIme.length == 0) {
                alert('Unesite korisnicko ime!')
            } else if(prLozinka.length <= 8) {
                alert('Lozinka mora biti duza od 8 karaktera!')
            }else if(prIme.length == 0) {
                alert('Unesite ime!')
            }else if(prPrezime.length == 0) {
                alert('Unesite prezime!')
            }else if(this.korisnik.datumRodjenja == 0) {
                alert('Unesite datum rodjenja!')
            }else{
                 console.log(this.korisnik)
                //  fetch("http://localhost:8081/api/registracija", {
                //     method: "POST",
                //     headers: {
                //     Accept: "application/json",
                //     "Content-type": "application/json",
                //     },
                //     body: JSON.stringify(this.korisnik),
                // })
                //     .then((response) => response.json   )
                //     // .then(if(data))
                //     .then((data) => {
                //     console.log("Success");
                //     // if (data =="korisnicko ime nije slobodno"){
                //     //     alert("korisnicko ime nije slobodno!")
                //     // }
                //      this.$router.push("/login");
                //     })
                //     .catch((err) => {
                //     console.log("Error : " + err);
                //     alert(err);
                //     });
                    }
            } 
                 }
        
    
    
}
</script>