<template>
  <main class="auth">
      <div class="box">
          <h2>Register</h2>
            <form @submit.prevent="register">
                <div class="alert danger" v-if="this.errorRegister">
                    <span>{{ this.errorRegister }}</span>
                </div>
                <div class="mt-4 mb-4">
                    <label for="first_name" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" v-model="this.registerForm.first_name">
                </div>
                <div class="mb-4">
                    <label for="last_name" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="last_name" v-model="this.registerForm.last_name">
                </div>
                <div class="mb-4">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" v-model="this.registerForm.username">
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="this.registerForm.password">
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary float-end">Register</button>
                </div>
            </form>
      </div>
      <div class="box">
          <h2>Login</h2>
          <form @submit.prevent="login">
               <div class="alert danger" v-if="this.errorLogin">
                    <span>{{ this.errorLogin }}</span>
                </div>
                <div class="mb-4">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" v-model="this.loginForm.username">
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="this.loginForm.password">
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary float-end">Login</button>
                </div>
            </form>
      </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
    mounted() {
        if (localStorage.getItem('token')) {
            this.$router.push('/note')
        }
    },

    data() {
        return {
            errorRegister: '',
            errorLogin: '',
            registerForm: {
                first_name: '',
                last_name: '',
                username: '',
                password: '',
            },
            loginForm: {
                username: '',
                password: '',
            },
        }
    },

    methods: {
        async register() {
            await axios.post('/auth/register', this.registerForm)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.$router.go('/note')
            })
            .catch(err => {
                this.errorRegister = err.response.data.messages
            })
        },

        async login() {
            await axios.post('/auth/login', this.loginForm)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                this.$router.go('/note')
            })
            .catch(err => {
                this.errorLogin = err.response.data.messages
            })
        }
    }
}
</script>

<style>

</style>