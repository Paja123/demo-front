<template>
  <div id="allRestorani">
    <h1>Restorani</h1>
    <!-- <button v-on:click="addEmployee">Add new employee</button> -->
    <!-- <br /><br /> -->
    <div class="container-restorani">
      <table id="restorani">
        <tr>
          <th>Naziv</th>
          <th>Tip</th>
          <th>Adresa</th>
          <th></th>
          <!--<th>Delete</th>
          <th>Edit</th> -->
        </tr>
        <tr v-for="restoran in restorani" :key="restoran.id">
          <td>{{ restoran.naziv }}</td>
          <td>{{ restoran.tip }}</td>
          <td>{{ restoran.adresa }}</td>
          <td>
            <button class="btnSeeMore" v-on:click="naruci(restoran)">
              See more
            </button>
          </td>
         <!-- <td>
            <button class="delete" v-on:click="deleteEmployee(employee.id)">
              Delete
            </button>
          </td>
       --> </tr>
        <!-- <restorani-comp
          v-for="restoran in restorani"
          :key="restoran.id"
          :restoran="restoran"
        >
        </restorani-comp> -->
      </table>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import RestoraniComp from "../components/RestoraniComp.vue";
export default {
  name: "RestoraniComp",
  components: { RestoraniComp },
  data: function () {
    return {
      restorani: [],
    };
  },
  mounted: function () {

    //primer axios poziva
    /*axios
      .get("http://localhost:8081/api/employees")
      .then((res) => {
        this.employees = res.data
      })
      .catch((err) =>{
        console.log(err)
      })*/

      fetch('http://localhost:8081/api/restorani' ,{
          credentials:'include'
      })
        .then(response => response.json())
        .then(data => {console.log("Success:", data); this.restorani = data})
        .catch((error) => {
          console.error("Error:", error);
        })
        ;
  },
  methods: {
    // addEmployee: function() {
    //   this.$router.push("/add-employee");
    // },
     naruci: function (restoran) {
       this.$router.push("/restoran?naziv=" + restoran.naziv);
     },
    // deleteEmployee: function (id) {
    //   fetch("http://localhost:8081/api/employees/" + id, {
    //     method: "DELETE",
    //   }).then((res) => {
    //     if (res.ok) {
    //       window.location.reload();
    //     }
    //   });
    // },
    // editEmployee: function(employee) {
    //  // this.$router.push("/edit-employee/" + employee.id);
    //   this.$router.push("/edit-employee?id=" + employee.id);
     },
  
};
</script>

<style>
h1 {
  color: #4caf50;
}

h3 {
  color: #4caf50;
}

.container-restorani {
  display: flex;
  justify-content: center;
}

#restorani th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

#restorani td,
#restorani th {
  border: 1px solid #ddd;
  padding: 8px;
}

#restorani tr:nth-child(even) {
  background-color: #f2f2f2;
}

#restorani tr:hover {
  background-color: #ddd;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}
</style>

