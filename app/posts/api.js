// Requiring the config file to gain access to our API URL
const config = require('../config')

const store = require('../store')

// POSTS CRUD Functions

// INDEX
// GET /posts (all posts)
const index = function () {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts',
        headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// SHOW
// GET /posts/ID (single post)
const show = function (id) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts/' + id,
        headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// DESTROY
// DELETE /posts/ID (single post)
const destroy = function (id) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/posts/' + id,
        headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// UPDATE
// PATCH /posts/ID (single post)
const update = function (id, formData) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/posts/' + id,
        data: formData,
        headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// CREATE
// POST /posts (create a single post)
const create = function (formData) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/posts',
        data: formData,
        headers: {
        Authorization: 'Bearer ' + store.user.token
    }
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