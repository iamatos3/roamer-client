'use strict'

// Require getFormFields to get data from forms
const getFormFields = require('../../lib/get-form-fields')

// Require API Auth Functions
const api = require('./api')
// Require UI Functions to update the page
const ui = require('./ui')

// EVENT HANDLER FUNCTIONS

// On SIGN UP
const onSignUp = function (event) {
    // Prevent the default action of refreshing the page
    event.preventDefault()

    // event.target is the form that causes the submit event
    const form = event.target
    // Get data from the form element
    const formData = getFormFields(form)

    // Make a POST /sign-up Request
    api.signUp(formData)
        // If the sign up request is successful - Show the signUpSuccess function
        .then(ui.signUpSuccess)
        // If an error occurs - Run the signUpFailure function
        .catch(ui.signUpFailure)
}

// On SIGN IN
const onSignIn = function (event) {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)

    api.signIn(formData)
       .then(ui.signInSuccess)
       .catch(ui.signInFailure)
}

// On CHANGE PASSWORD
const onChangePassword = function (event) {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)

    // Make a PATCH /change-password request to pass it the old and new passwords
    api.changePassword(formData)
       .then(ui.changePasswordSuccess)
       .catch(ui.changePasswordFailure)
}

// On SIGN OUT
const onSignOut = function (event) {
    // Make a DELETE /sign-out request to sign out
    api.signOut()
       .then(ui.signOutSuccess)
       .catch(ui.signOutFailure)
}

// Exports
module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut
}