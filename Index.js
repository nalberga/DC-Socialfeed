const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


 let post = [
  {
  username: "John Doe",
  email: "john.doe@gmail.com",
  image: "http://www.example.com/image.png",
  text: "social Hacker site is the best"
  }
]
app.get('/api/posts', (req, res) => {
res.json(post);
})


app.post('/api/posts', (req,res) => {
    


      const data = {
        username: req.body.username,
        email:req.body.email,
        image: req.body.image,
        text: req.body.text
      }

      if (!data.username || !data.email || !data.image || !data.text) {
        return res.status(400).json({ msg: 'Please include a username, email, image or text'});
      }
  
        post.push(data);
       res.json(data);
    
  });


var api_url = 'http://localhost:3000/';


function getPosts(successCallback, errorCallback) {

    $.ajax({
        url: api_url + 'api/posts',
        success: successCallback,
        error : errorCallback
    });
}

function insertPost(data, successCallback, errorCallback) {

    $.ajax({
        type: "POST",
        data: data,
        url: api_url + 'api/posts',
        success: successCallback,
        error : errorCallback
      });
}

function createPostItem(data) {
    let item = `
        <div class="card card-body bg-light">
            <div>${data.username}</div>
            <div>${data.email}</div>
            <div>${data.image}</div>
            <div>${data.text}</div>

        </div>
    `

    return item;
}

function insertIntoFeed(item) {
    $('#displayUserInput').append(item);
}



app.listen(3000, function() {
  console.log('The server is Listening...')
})




