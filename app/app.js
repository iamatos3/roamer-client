// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const postEvents = require('./posts/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // AUTH Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // POSTS Events
  $('#posts-index').on('click', postEvents.onIndexPosts)
  $('#posts-show').on('submit', postEvents.onShowPost)
  $('#posts-delete').on('submit', postEvents.onDestroyPost)
  $('#posts-update').on('submit', postEvents.onUpdatePost)
  $('#posts-create').on('submit', postEvents.onCreatePost)

  $('posts-display').on('click', '.posts-destroy-dynamic', postEvents.onDynamicDestroyPost)
  $('posts-display').on('submit', '.posts-update-dynamic', postEvents.onDynamicUpdatePost)
})
