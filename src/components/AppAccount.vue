<template>
  <v-card>
    <v-card-text>
      <h1 class="headline">My account</h1>
      <br>
      {{ $store.getters.accountName }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn router to="/myaccount" flat>Profile</v-btn>
      <v-btn color="error" flat>Logout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
}
</script>
