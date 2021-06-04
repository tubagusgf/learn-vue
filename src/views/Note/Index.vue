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
                    <router-link :to="{name: 'ShowNote', params: { id: note.id }}" class="btn info">Detail</router-link>
                    <router-link :to="{name: 'EditNote', params: { id: note.id }}" class="btn warning ml-10">Edit</router-link>
                    <button class="btn danger ml-10" @click="() => deleteNote(note.id)" :id="note.id">Delete</button>
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
        },

        async deleteNote(id) {
            const row = document.getElementById(id)
            const question = confirm(`You want to delete this note?`);

            if (question) {
                await axios.delete(`/note/${id}`, {params: {token:localStorage.getItem('token')}})
                row.parentElement.parentElement.remove()   
            }
        }
    }
}
</script>

<style>

</style>