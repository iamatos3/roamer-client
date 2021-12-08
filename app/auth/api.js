'use strict'

const config = require('../config')

// Requiring the store file for access to the store object
const store = require('../store')

// AUTH CRUD Functions

// SIGN UP
const signUp = function (formData) {
    return $.ajax({
        url: `${config.apiUrl}/sign-up`,
        method: 'POST',
        data: formData
    })
}

// SIGN IN
const signIn = function (formData) {
    return $.ajax({
        url: `${config.apiUrl}/sign-in`,
        method: 'POST',
        data: formData
    })
}

// CHANGE PASSWORD
const changePassword = function (formData) {
    return $.ajax({
        url: `${config.apiUrl}/change-password`,
        method: 'PATCH',
        data: formData,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

// SIGN OUT
const signOut = function () {
    return $.ajax({
        url: `${config.apiUrl}/sign-out`,
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

// EXPORTS
module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut
}