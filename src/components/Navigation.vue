<template>
    <nav>
        <h1 class="logo">Note</h1>
        <router-link to="/note" v-if="isLogin">Note</router-link>
        <a href="#" v-if="isLogin" @click.prevent="logout">Logout</a>
    </nav>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            'isLogin': false
        }
    },

    mounted() {
        if (localStorage.getItem('token')) {
            this.isLogin = true
        }
    },

    methods: {
         logout() {
            axios.get('/auth/logout', {params: { token:localStorage.getItem('token') }})
            localStorage.removeItem('token')
            this.isLogin = false
            this.$router.push('login')
        }
    }
}
</script>

<style>

</style>