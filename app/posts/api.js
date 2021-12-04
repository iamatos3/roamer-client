// Requiring the config file to gain access to our API URL
const config = require('../config')

// POSTS CRUD Functions

// INDEX
// GET /posts (all posts)
const index = function () {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts'
    })
}

// SHOW
// GET /posts/ID (single post)
const show = function (id) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts/' + id
    })
}

// DESTROY
// DELETE /posts/ID (single post)
const destroy = function (id) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/posts/' + id
    })
}

// UPDATE
// PATCH /posts/ID (single post)
const update = function (id, formData) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/books/' + id,
        data: formData
    })
}

// CREATE
// POST /posts (create a single post)
const create = function (formData) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/posts',
        data: formData
    })
}

// Exports
module.exports = {
    index,
    show,
    destroy,
    update,
    create
}