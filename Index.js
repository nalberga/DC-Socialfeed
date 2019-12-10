const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

 let post = [
  {
  username: "John Doe",
  email: "john.doe@gmail.com",
  image: "http://www.example.com/image.png",
  text: "social Hacker site is the best"
  }
]
app.get('/api/posts', cors(), (req, res) => {
res.json(post);
})

app.post('/api/posts', cors(), (req,res) => {
    
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

app.listen(3000, function() {
  console.log('The server is Listening...')
});




