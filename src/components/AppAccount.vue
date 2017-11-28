<template>
  <v-card>
    <v-card-text>
      <h1 class="headline">My account</h1>
      <br>
      {{ name }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn router to="/my/account" flat>Profile</v-btn>
      <v-btn color="error" flat>Logout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AppAccount',
  computed: {
    firstname () {
      return this.$store.getters.client.firstname
    },
    lastname () {
      return this.$store.getters.client.lastname
    },
    name () {
      return this.lastname + ' ' + this.firstname
    }
  }
}
</script>
