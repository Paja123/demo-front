<template>
  <tr>
    <td>{{ restoran.naziv }}</td>
    <td>{{ restoran.tip }}</td>
    <td>{{ restoran.adresa }}</td>
    <td>
      <button class="btnSeeMore" v-on:click="naruci">Naruci</button>
    </td>
  <!--   <td>
      <button class="delete" v-on:click="deleteEmployee">
        Delete
      </button>
    </td>
    <td>
      <button class="delete" v-on:click="editEmployee">
        Edit
      </button>
    </td> -->
  </tr>
</template>

<script>
export default {
  name: "RestoranComp",
  props: ["restoran"],
  methods: {
    naruci: function () {
      this.$router.push("/restoran?id=" + this.restoran.naziv);
    },
    // deleteEmployee: function() {
    //   fetch("http://localhost:8081/api/employees/" + this.employee.id, {
    //     method: "DELETE",
    //   }).then((res) => {
    //     if (res.ok) {
    //       window.location.reload();
    //     }
    //   });
    // },
    // editEmployee: function(){
    //       this.$router.push("/edit-employee?id=" + this.employee.id);
    // }
  },
};
/* fetch("http://localhost:8081/api/employees/" + this.employee.id,{
      method: "PUT",
      }).then((res) => {
          if(res.ok){
            this.$router.push("http://localhost:8081/api/employees/");
          }

      });
*/
</script>


<style>
</style>
