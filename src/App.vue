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
      this.$router.push('/login')
      if (!localStorage.getItem('token')) {
          this.$router.push('/login')
      }
  }
}
</script>

<style>

</style>
