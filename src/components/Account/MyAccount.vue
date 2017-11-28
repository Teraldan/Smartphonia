<template>
  <div>
    <h1 class="title">My informations</h1>

    <v-list>
      <v-list-tile>
        <v-layout row>
          <v-flex sm4><h4>Name</h4></v-flex>
          <v-flex sm8>{{ client.lastname }} {{ client.firstname }}</v-flex>
        </v-layout>
      </v-list-tile>

      
      <v-list-tile>
        <v-layout row>
          <v-flex sm4><h4>Email</h4></v-flex>
          <v-flex sm8>{{ client.email }}</v-flex>
        </v-layout>
      </v-list-tile>


      <v-list-tile>
        <v-layout row>
          <v-flex sm4><h4>Birth date</h4></v-flex>
          <v-flex sm8>{{ client.birthDate | moment('MMM Do YYYY') }}</v-flex>
        </v-layout>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',
  computed: {
    client () {
      return this.$store.getters.client
    }
  }
}
</script>
