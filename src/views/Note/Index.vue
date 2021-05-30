<template>
  <main class="container">
    <router-link to="/note/create">Create note</router-link>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(note, index) in notes" :key="note.id">
            <tr>   
                <th>{{ index+1 }}</th>
                <td>{{ note.title }}</td>
                <td>{{ note.content }}</td>
                <td>
                    <router-link to="/note/edit" class="btn info">Detail</router-link>
                    <router-link to="/note/edit" class="btn warning ml-10">Edit</router-link>
                    <button class="btn danger ml-10">Delete</button>
                </td>
            </tr>
            </template>
        </tbody>
    </table>
  </main>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            'notes': []
        }
    },

    mounted() {
        this.getNotes()
    },

    methods: {
        async getNotes() {
            await axios.get('/note', {params: {token: localStorage.getItem('token')}})
            .then(res => {
                this.notes = res.data.note
            })
        }
    }
}
</script>

<style>

</style>