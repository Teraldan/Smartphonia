<template>
  <v-app light>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn router to="/" exact flat>Home</v-btn>
        <v-btn router to="/store/smartphones" flat>Smartphones</v-btn>
        <v-btn flat>Phone plans</v-btn>
        <v-btn router to="/myaccount" flat>Account</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Smartphonia'
      }
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .05s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>

