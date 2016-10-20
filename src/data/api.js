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
  }
}
