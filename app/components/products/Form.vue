<template>
    <div class="container">
        <h1 class="title">
            Producto
        </h1>
        <div class="field">
            <label class="label">Descripción</label>
            <div class="control with-help">
                <input class="input" v-bind:class="{ 'is-danger': $v.form.description.$error }" type="text" v-model="form.description" autocomplete="off" @input="$v.form.description.$touch()" maxlength="100">
            </div>
            <p class="help is-danger" v-show="!$v.form.description.required">Requerido</p>
        </div>
        <div class="field">
            <label class="label">Precio</label>
            <div class="control has-icons-left with-help">
                <input class="input" type="number" v-bind:class="{ 'is-danger': $v.form.price.$error }" v-model="form.price" @input="$v.form.price.$touch()" step=".01">
                <span class="icon is-small is-left">
                    <i class="fa fa-usd"></i>
                </span>
            </div>
            <p class="help is-danger" v-show="!$v.form.price.required">Requerido</p>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click.prevent="save"  :disabled="$v.$invalid">Guardar</button>
            </div>
            <div class="control">
                <button class="button is-link" v-on:click.prevent="cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { required, minLength, numeric } from 'vuelidate/lib/validators';
    import {router} from '../../routes.js'

    export default {
        data() {
            return {   
                form: {             
                    description: null,
                    price: null,
                },
                loading: false
            }
        },
        validations: {
            form: {
                description: {
                    required,
                    minLength: minLength(3)
                },
                price: {
                    required,
                    numeric
                },
            }
        },
        components: {
        },
        methods: {
            save() {
                this.addProducto(this.form).then(r => {
                    router.push({
                        name: 'productsList'
                    })
                })
            },
            cancel(){
                router.push({
                    name: 'productsList'
                })
            },
            ...mapActions([
                'addProducto'
            ]),
        }
    }
</script>