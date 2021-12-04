// Importing the API Functions from api.js
const api = require('./api')
// Importing the UI Success and Failure Handler Functions
const ui = require('./ui')

// Importing the getFormFields function to receive data out of the form
const getFormFields = require('../../lib/get-form-fields')

// EVENT Functions

// INDEX function will be called when the posts-index button is clicked
const onIndexPosts = () => {
    api.index()
       .then(ui.onIndexPostsSuccess)
       .catch(ui.onError)
}

// SHOW function will be called when a user is looking for a specific post
const onShowPost = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    console.log(formData)

    const id = formData.post.id

    api.show(id)
       .then(ui.onShowPostSuccess)
       .catch(ui.onError)
}

// DESTROY function will be called when a user wants to delete a specific post
const onDestroyPost = (event) => {
    event.preventDefault()

    const deleteForm = event.target
    const formData = getFormFields(deleteForm)

    const id = formData.post.id

    api.destroy(id)
       .then(ui.onDestroyPostSuccess)
       .catch(ui.onError)
}

// UPDATE Function will be called when a user wants to update a specific post
const onUpdatePost = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    console.log(formData)

    const id = formData.post.id

    api.update(id, formData)
       .then(ui.onUpdatePostSuccess)
       .catch(ui.onError)
}

// CREATE Function will be called when a user wants to create a new post
const onCreatePost = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    console.log(formData)

    api.create(formData)
       .then(ui.onCreatePostSuccess)
       .catch(ui.onError)
}

const onDynamicDestroyPost = (event) => {
    const id = $(event.target).data('id')

    api.destroy(id)
       .then(ui.onDynamicDestroyPost)
       .catch(ui.onError)
}

const onDynamicUpdatePost = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = getFormFields(form)
    console.log(formData)

    const id = $(event.target).data('id')

    api.update(id, formData)
       .then(ui.onUpdatePostSuccess)
       .catch(ui.onError)
}

// Exports
module.exports = {
    onIndexPosts,
    onShowPost,
    onDestroyPost,
    onUpdatePost,
    onCreatePost,
    onDynamicDestroyPost,
    onDynamicUpdatePost
}