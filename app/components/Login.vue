<template>
    <div class="page-content">
        <div class="login-container">
            <div id="login-box" key="on" class="login-box visible widget-box no-border" >
                <div class="widget-body">
                    <div class="widget-main">
                        <form class="form-signin" autocomplete="off" v-on:submit="signin">
                            <div class="form-signin-group">
                                <center>
                                    <h2>Iniciar sesión</h2>
                                    <div class="alert alert-danger" v-if="userAndPasswordNoMatch">
                                        <p>El usuario o la contraseña no coincide</p>
                                    </div>
                                </center>
                                <div>
                                    <div class="form-group" v-bind:class="{ 'form-group--error': $v.validationGroup['login'].email.$error }">
                                        <label class="control-label" for="UserName">Email</label>
                                        <input class="form-control" id="Emails" name="email" v-model="login.email" type="text" @input="$v.validationGroup['login'].email.$touch()">
                                    </div>
                                    <span class="form-group-message" v-if="!$v.validationGroup['login'].email.required">Email es requerido.</span>
                                    <div class="form-group" v-bind:class="{ 'form-group--error': $v.validationGroup['login'].password.$error }">
                                        <label class="control-label" for="Password">Contraseña</label>
                                        <input class="form-control" id="Password" name="Password" type="password" v-model="login.password" @input="$v.validationGroup['login'].password.$touch()">
                                    </div>
                                    <span class="form-group-message" v-if="!$v.validationGroup['login'].password.required">Contraseña es requerida.</span>
                                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="$v.validationGroup['login'].$invalid || isLoading">
                                        Iniciar
                                        <i class="fa fa-spinner fa-spin" v-if="isLoading"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import auth from '../js/auth.js';
    import { router } from '../js/app.js';
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                login: {
                    email: null,
                    password: null,
                },
                recovery: {
                    email:null
                },
                userAndPasswordNoMatch: false,
                isLoading: false
            }
        },
         validations: {
             login:{
                 email: {
                     required,
                     email
                 },
                 password: {
                     required,
                     minLength: minLength(6)
                 },
             },
             recovery:{
                 email: {
                     required,
                     email
                 }
             },
            validationGroup: ["login", "recovery"]
        },
        methods: {
            signin(event) {
                event.preventDefault()
                this.isLoading = true;
                auth.signin(this, this.login.email, this.login.password)
            },
            recoveryPassword(event) {
                this.isLoading = true;
                auth.recovery(this, this.recovery.email).then(response => {
                    this.isLoading = false
                    this.recoverySuccess = true;
                }, response => {
                    this.isLoading = false
                    this.recoverySuccess = false;
                })

            },
            toggleLogin($v) {
                this.isLoading = false
                this.isLogin = !this.isLogin
                if(!this.isLogin){
                    this.recovery.email = "";
                    $v.recovery.$reset();
                }
            },
        },
        created() {
            router.push({
                name: 'informacion'
            });
        }
    }
</script>