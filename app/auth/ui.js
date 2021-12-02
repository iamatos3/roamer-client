'use strict'
// Requiring the Store object to share data between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
    // Tell the user it was Successful
    $('#posts-display').text('Sign up was successful!')
    // Remove existing classes + adding a green text-success class via Bootstrap
    $('#posts-display').removeClass()
    $('#posts-display').addClass('text-success')

    // Reset all of the Forms
    $('form').trigger('reset')

    console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
    // Tell the user the attempt has Failed
    $('#error-message').text('Sign up attempt has failed. Please try again.')
    // Removing existing classes + adding a red text-danger class via Bootstrap
    $('#error-message').removeClass()
    $('#error-message').addClass('text-danger')

    // Print the Error
    console.error(error)
}

const signInSuccess = function (responseData) {
	// Adding the 'user' we got back from the response's data to the store object
	// Also be able to access the user's token in api.js
	store.user = responseData.user
	console.log('store is', store)

    $('#posts-display').text('Successfully signed in!')
    
    $('#posts-display').removeClass()
    $('#posts-display').addClass('text-success')

    $('form').trigger('reset')

    // After signing in - Hide the section with the id 'before-sign-in'
    $('#before-sign-in').hide()
    // After signing in - Show the section with the id 'after-sign-in'
    $('#after-sign-in').show()

    console.log('responseData is', responseData)
}

const signInFailure = function (error) {
    $('#error-message').text('One of your login credentials was incorrect. Please try again.')

    $('#error-message').removeClass()
    $('#error-message').addClass('text-danger')

    console.error(error)
}

const changePasswordSuccess = function (responseData) {
    $('#posts-display').text('Change password was successful!')

    $('#posts-display').removeClass()
    $('#posts-display').addClass('text-success')

    $('form').trigger('reset')

    console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
    $('#error-message').text('Change password failed. Please try again.')

    $('#error-message').removeClass()
    $('#error-message').addClass('text-danger')

    console.error(error)
}

const signOutSuccess = function () {
    $('#posts-display').text('Successfully signed out!')

    $('#posts-display').addClass('text-success')

    $('form').trigger('reset')

    $('#before-sign-in').show()
    $('#after-sign-in').hide()
}

const signOutFailure = function (error) {
    $('#error-message').text('Unable to sign out. Please try again.')

	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	console.error(error)
}

// Exports
module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}