import 'isomorphic-fetch'

export const Api = {

  fetchPosts(username) {
    const URL = "https://ongairgram.firebaseio.com/posts.json?orderBy=\"username\"&equalTo=\"" + username + "\"";
    return fetch(URL)
      .then(function(response) {
        if(response.status >= 400)
          throw new Error("Bad response from server");
        return response.json();
      })
  },

  fetchComments(postId) {
    const URL = "https://ongairgram.firebaseio.com/comments.json?orderBy=\"postId\"&equalTo=\"" + postId + "\"";
    console.log("Fetch comments", URL)
    return fetch(URL)
      .then(function(response) {
        if(response.status >= 400)
          throw new Error("Bad response from server")
        return response.json()
      })
  },

  removeComment(comment) {
    console.log("Removing comment", comment)
    return true
  }
}
