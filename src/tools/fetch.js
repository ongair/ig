var config = {
    apiKey: "AIzaSyC78FiREQieMwfpemq0RkYj2kJ60Yimgfw",
    authDomain: "ongairgram.firebaseapp.com",
    databaseURL: "https://ongairgram.firebaseio.com",
    storageBucket: "ongairgram.appspot.com",
    messagingSenderId: "265027508719"
  };

var firebase = require('firebase');
firebase.initializeApp(config);

var database = firebase.database();

var { InstagramPosts, InstagramComments } = require('instagram-screen-scrape');

var posts = {};
// var username = 'huddahthebosschick';
var username = 'backyardshoez';

streamOfPosts = new InstagramPosts({username: username });
streamOfPosts.on('data', function(post) {

  savePost(post);
});

function savePost(post) {
  // console.log("Post", post);
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var update = {};
  update['/posts/' + newPostKey] = post;
  firebase.database().ref().update(update)
    .then(function(snapshot) {

      console.log("Saved post", post.id);
      streamOfComments = new InstagramComments({ post: post.id });
      streamOfComments.on('data', function(comment) {
        var newCommentKey = firebase.database().ref().child('comments').push().key;

        comment.postId = post.id;
        var commentUpdate = {};
        commentUpdate['/comments/' + newCommentKey] = comment;

        firebase.database().ref().update(commentUpdate)
          .then(function(sp) {
            console.log("Saved comment", comment.id);
          })
      });
    });
}
