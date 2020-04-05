<template>
   <v-app>
    <v-app-bar app>
      <span><v-icon>fas fa-info-circle</v-icon></span>
    </v-app-bar>
    <v-content>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card width="200" height="200" class="card add" @click="goToAdd()">
            <v-icon style="color: #faebeb; font-size: 37px;">fas fa-user-plus</v-icon>
            <span class="card-title">Добавить <br> участника</span>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card width="200" height="200" class="card">
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card width="200" height="200" class="card">
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card width="200" height="200" class="card">
          </v-card>
        </v-col>
      </v-row>
      <router-view></router-view>
    </v-container>
  </v-content>
   </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',

  data: () => ({
  }),
  components: {
  },

  methods: {
    ...mapActions(['Get_Photos']),
    goToAdd () {
      this.$router.push({
        name: 'AddPerson'
      })
    }
  },

  mounted () {
    this.Get_Photos()
  }
}
</script>

<style scoped>
  .card{
    border-radius: 27px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column;
  }

  .add{
    background-color: #813ce3 !important;
  }

  .card-title{
    display: block;
    color: #faebeb;
    font-size: 15px;
    margin-top: 17px;
  }
</style>
