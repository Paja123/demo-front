<template>
  <label for="firstName">First name:</label>
  <input v-model="employee.firstName"  /><br />
  <label for="lastName">Last name:</label>
  <input v-model="employee.lastName" /><br />
  <label for="position">Position:</label>
  <input v-model="employee.position" /><br />
  <button v-on:click="submit()">submit</button>
</template>

<script>
import axios from "axios"

export default {
  name: "EditEmployeeView",
  data: function (employee) {
    
    return {
      employee: {
        firstName: "",
        lastName: "",
        position: "",
      },
    };
  },
  mounted(){
    fetch('http://localhost:8081/api/employees/' + this.$route.query.id)
    .then(res => res.json())
    .then(data => this.employee = data)
    .catch(err => console.log(err.message))
  },

  methods: { 
    submit: function () {            
     /*      let formData = new FormData();
            formData.append("ime", this.employee.firstName);
            formData.append("prezime", this.employee.lastName);
            formData.append("position", this.employee.position);
     axios
            .put("http://localhost:8081/api/employees/" + this.$route.query.id, {
                  params: {
                     data: formData
                },

                  headers: {
                       "Content-Type": "multipart/form-data"
                }

            })
             .then((response) => response.json)
        .then((data) => {
          console.log("Success : " + data);
          this.$router.push("/employees");
        })
            .catch(error => {
                console.log(error);
            });


*/
      fetch('http://localhost:8081/api/employees/' + this.$route.query.id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.employee),
      })
        
        .then((response) => response.json)
        .then((data) => {
          console.log("Success : " + data);
          this.$router.push("/employees");
        })
        .catch((error) => {
                console.error("Error:", error);
            });
    },
  },
}

</script>
