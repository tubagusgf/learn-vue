<template>
  <main class="container">
      <h1>{{ this.data.title }}</h1>
      <hr class="mt-4">
      <p class="mt-4">{{ this.data.content }}</p>
  </main>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            data: []
        }
    },

    mounted() {
        this.getNote()
    },

    methods: {
        async getNote() {
            await axios.get(`/note/${this.$route.params.id}`, {params: { token: localStorage.getItem('token') }})
            .then(res => {
                this.data = res.data.data;
            })
            .catch(err => {
                console.error(err);
            })
        }
    }
}
</script>

<style>

</style>