<template>
  <main class="container">
      <h2 class="mb-4">Edit Note</h2>
      <form @submit.prevent="update">
          <div class="alert success" v-if="this.success">
            <span>{{ this.success }}</span>
          </div>
          <div class="alert danger" v-if="this.error">
            <span>{{ this.error }}</span>
          </div>
          <div class="mb-4">
              <label for="title" class="form-label">Title</label>
              <input type="text" class="form-control" id="title" v-model="form.title">
          </div>
          <div class="mb-4">
              <label for="content" class="form-label">Content</label>
              <textarea class="form-control" v-model="form.content" id="content" rows="3"></textarea>
          </div>
          <div class="mb-4">
              <button class="btn btn-primary float-end">Edit</button>
          </div>
      </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            error: '',
            success: '',
            form: {
                title: '',
                content: '',
            }
        }
    },

    mounted() {
        this.getNote()
    },

    methods: {
         async getNote() {
            await axios.get(`/note/${this.$route.params.id}`, {params: { token: localStorage.getItem('token') }})
            .then(res => {
                this.form = res.data.data;
            })
            .catch(err => {
                console.error(err);
            })
        },

        async update() {
            await axios.put(`/note/${this.$route.params.id}`, this.form, {params: { token: localStorage.getItem('token') }})
            .then(res => {
                this.error = ''
                this.success = res.data.messages
            })
            .catch(err => {
                this.success = ''
                this.error = err.response.data.messages
            })
        }
    }
}
</script>

<style>

</style>