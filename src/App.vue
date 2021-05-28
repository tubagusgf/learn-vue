<template>
  <Navigation />
  <router-view/>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: {
    Navigation,
  },

  mounted() {
      if (!localStorage.getItem('token')) {
          this.$router.push('/login')
      }
  }
}
</script>

<style>

</style>
