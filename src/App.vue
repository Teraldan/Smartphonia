<template>
  <v-app light>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn router to="/" exact flat>Home</v-btn>
        <v-btn router to="/store/smartphones" flat>Smartphones</v-btn>
        <v-btn router to="/store/plans" flat>Phone plans</v-btn>
        <v-btn router to="/my/" @click="$router.push('/my/account')" flat>Account</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <transition name="slide-y-fade" mode="out-in">
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
    },
    computed: {
      isMySection () {
        let fullPath = this.$route.fullPath.toString()
        return fullPath.startsWith('/my/')
      }
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .05s ease
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.slide-x-fade-enter-active {
  transition: all .55s ease;
}
.slide-x-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-x-fade-enter, .slide-x-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-y-fade-enter-active {
  transition: all .55s ease;
}
.slide-y-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-y-fade-enter, .slide-y-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>

