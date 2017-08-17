
import { config } from '../config/firebase-config.js'
import * as types from './mutation-types'

import * as firebase from 'firebase'
var app = firebase.initializeApp(config);
var db = app.database()
let productsRef = db.ref('products')

productsRef.on('value', (snapshot) => {
    var elements = [];
    snapshot.forEach(e => {
        elements.push(e.val())
    })
    commit(types.RECEVED_PRODUCTS, elements)
})

export const addProducto = ({ commit }, producto) => {
    return new Promise((resolve,reject) => {
        productsRef.push(producto).then(r => {
            commit(types.ADD_PRODUCT, producto)
            resolve()
        })
    })
}

export const removeProducto = ({ commit }, index) => {
    commit(types.DELETE_PRODUCT, index)
}

export const getProductos = ({ commit },index) => {
    productsRef.once('value', (snapshot) => {
        var elements = [];
        snapshot.forEach(e => {
            elements.push(e.val())
        })
        commit(types.RECEVED_PRODUCTS, elements)
    })
}
var refreshProductos = ({ commit },index) => {
    productsRef.once('value', (snapshot) => {
        var elements = [];
        snapshot.forEach(e => {
            elements.push(e.val())
        })
        commit(types.RECEVED_PRODUCTS, elements)
    })
}