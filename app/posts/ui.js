// UI Success Functions

// INDEX
// If ran successfully, you'll get all of the posts from the API
const onIndexPostsSuccess = function (responseData) {
    // Extracting the posts from the response data into a variable for easier use
    const posts = responseData.posts
    // Creating a string that will store all posts as HTML so I can later use the HTML method to display the posts on the page
    let postsHtml = ''

    // Looping over all of the posts
    posts.forEach(post => {
        // Add HTML for each post to the postsHtml variable
        postsHtml += `
            <div>
                <h4>Title: ${post.title}</h4>
                <p>Location: ${post.location}</p>
                <p>ID: ${post._id}</p>
                <p>Content: ${post.content}</p>
                <p>Rating: ${post.rating}</p>
            </div>
        `
    })
    // Updating the posts-display div HTML for all posts we want to show
    $('#posts-display').html(postsHtml)
}

// SHOW
// If ran successfully, you'll get the specific post the user wants to view from the API
const onShowPostSuccess = function (responseData) {
    // Extracting the post object from the response's data
    const post = responseData.post
    console.log(responseData)

    // Created the HTML to display a single book
    const postHtml =
    `
    <div>
        <h4>Title: ${post.title}</h4>
        <p>ID: ${post._id}</p>
        <p>Location: ${post.location}</p>
        <p>Content: ${post.content}</p>
        <p>Rating: ${post.rating}</p>
    </div>
    `
    $('#posts-display').html(postHtml)
    $('form').trigger('reset')
}

// DESTROY
// If ran successfully, the user will be able to delete the specific post
const onDestroyPostSuccess = function () {
    $('#posts-display').text('This post was successfully deleted!')
    $('#posts-display').addClass('text-success')

    // After 3 seconds(ms), run the callback function
    setTimeout(() => {
        // Remove the message from text display
        $('#posts-display').html('')
        // Remove the green text cause by text-success
        $('posts-display').removeClass('text-success')
    }, 3000)

    $('form').trigger('reset')
}

// UPDATE
// If ran successfully, the user will be able to update a specific post
const onUpdatePostSuccess = function () {
    $('#posts-display').text('Post was updated successfully, please click "View all Posts" to see your changes')
    $('#posts-display').addClass('text-success')

    setTimeout(() => {
        $('#posts-display').html('')
        $('#posts-display').removeClass('text-success')
    }, 3000)

    $('form').trigger('reset')
}

// CREATE
// If successfully ran, show the new post entry the user created
const onCreatePostSuccess = function () {
    $('#posts-display').text('Your Post was successfully created!')

    $('form').trigger('reset')
}

// ERROR
// If an Error occurs, the error will be logged
const onError = function (err) {
    console.error(err)

    $('#error-message').text('Something went wrong. Please try again!')
    $('#error-message').addClass('text-danger')

    setTimeout(() => {
        $('#error-message').html('')
        $('#error-message').removeClass('text-danger')
    }, 3000)

    $('form').trigger('reset')
}

// Exports
module.exports = {
  onIndexPostsSuccess,
  onShowPostSuccess,
  onDestroyPostSuccess,
  onUpdatePostSuccess,
  onCreatePostSuccess,
  onError
}
