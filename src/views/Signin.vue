<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img class="image"
              src="https://cdn.dribbble.com/users/2057697/screenshots/11405073/media/7c71d0d51ef5a492c02043429bce5294.jpg"></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-text-field label="Username" v-model="username"></v-text-field>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-text-field label="Password" v-model="password"></v-text-field>

          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-btn @click="signin">Login</v-btn>

          </v-col>
          <v-col cols="4"></v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
  <v-form>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
  </v-form>


</template>

<script>
import axios from 'axios'


export default {
  name: 'SigninView',


  components: {
  },
  data() {
    return {
      username: " ",
      password: " ",
      //userIsAuthorised: true,
      show: true
    }
  },
  methods: {
    signin() {
      this.$router.push("/products")
    }

  }


}
</script>

<style scoped>
body {
  background: black;
}
</style>