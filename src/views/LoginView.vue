<template>
<!-- <div class="section"></div>
  <main>
    <div class="center">
      <img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" />
      <div class="section"></div>

      <h5 class="indigo-text">Prijavite se na Vas nalog</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

          <form class="col s12" >
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='text' name='text' id='textKorisnickoIme' v-model="korisnickoIme" />
                <label for='text'>Unesite korisnicko ime</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password' name='password' id='password' v-model="lozinka"/>
                <label for='password'>Unesite lozinku</label>
              </div>
              <label style='float: right;'>
								<a class='pink-text' href='#!'><b>Nemate nalog? Registrujte se!</b></a>
							</label>
            </div>

            <br />
            <div class="center">
              <div class='row'>
                <button @click="login" type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </div>

    <div class="section"></div>
    <div class="section"></div>
  </main>
       -->
       <h1>Login</h1>
       <div class="login">
          <input type="text" v-model="korisnik.korisnickoIme" placeholder="Korisnicko ime" />
          <input type="password" v-model="korisnik.lozinka" placeholder="Lozinka" />
          <button @click="login">Login</button>
          <p>
            <router-link to="/registracija"> Nemate profil? Registrujte se!</router-link>
          </p>
       </div>
</template>

<script>
export default{
     name: "LoginView",
  data: function () {
    return {
        korisnik: {
          korisnickoIme: "",
          lozinka: "",
          ime:"",
          prezime:"",
          datumRodjenja:"",
          pol:"",
          uloga: "",
       },
    };
   

  },
  methods: {
    login(){
        // var dto = new Object();
        
        // dto.korisnickoIme = this.korisnik.korisnickoIme
        // dto.lozinka = this.korisnik.lozinka
        
      fetch("http://localhost:8081/api/login", {
        method: "POST",
        credentials:'include',
        headers: {
          Accept: "application/json",
          'Content-type': 'application/json',
        },
        body: JSON.stringify(this.korisnik),
    
      })
        .then((res) => res.json)
        .then((data) => {
          console.log("Success : " + data);
          //this.korisnik = data;
          
          // console.log(JSON.stringify(res.data.korisnik));
           console.log(this.korisnik.korisnickoIme)
           console.log(this.korisnik.uloga)
           console.log(this.korisnik);
          

          console.log(this.korisnik);
          // .then((data) => this.korisnik = data)
          //this.$router.push("/restorani");
        })
        .catch((err) => {
          console.log("Error : " + err);
          alert(err);
        });
         if(this.korisnik.uloga == "Kupac"){
            this.$router.push("/restorani");

         }
      
    
    }
  }

}
</script>