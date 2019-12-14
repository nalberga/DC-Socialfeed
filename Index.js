const config = {
  host: 'localhost',
  port: 5432,
  database: 'socialfeed_db',
  user: 'postgres'
};

const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp(config);
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

//   app.get('/api/posts', function (req, res) {
//     db.query('SELECT * FROM posts')
//         .then((results) => {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(results));
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });
// app.get('/api/posts/:id', function (req, res) {
//     let id = req.params.id;
//     db.one("SELECT * FROM posts WHERE id=$1", [id])
//         .then((results) => {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(results));
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });
// //Example curl : curl --data "title=homewardbound&body=greatbook&user_id=1" http://localhost:3000/api/posts
// app.post('/api/posts', function (req, res) {
//     let data = {
//         title: req.body.title,
//         body: req.body.body,
//         user_id: req.body.user_id,
//         image_url: req.body.image_url
//     };
//     let query = "INSERT INTO posts(title, body, user_id, image_url) VALUES (${title}, ${body}, ${user_id}, ${image_url}) RETURNING id";
//     db.one(query, data)
//         .then((result) => {
//             db.one("SELECT * FROM posts JOIN users ON posts.user_id=users.id WHERE posts.id=$1", [result.id])
//                 .then((results) => {
//                     res.setHeader('Content-Type', 'application/json');
//                     res.end(JSON.stringify(results));
//                 })
//                 .catch((e) => {
//                     console.error(e);
//                 });
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });
// app.put('/api/posts/:id', function (req, res) {
//     let id = req.params.id;
//     let data = {
//         id: id,
//         title: req.body.title,
//         body: req.body.body,
//         image_url: req.body.image_url
//     };
//     let query = "UPDATE posts SET title=${title}, body=${body}, image_url=${image_url} WHERE id=${id}";
//     db.one(query, data)
//         .then((result) => {
//             db.one(query, data)
//                 .then((result) => {
//                     db.one("SELECT * FROM posts JOIN users ON posts.user_id=users.id WHERE posts.id=$1", [result.id])
//                         .then((results) => {
//                             res.setHeader('Content-Type', 'application/json');
//                             res.end(JSON.stringify(results));
//                         })
//                         .catch((e) => {
//                             console.error(e);
//                         });
//                 })
//                 .catch((e) => {
//                     console.error(e);
//                 });
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });
// app.delete('/api/posts/:id', function (req, res) {
//     let id = req.params.id;
//     let query = `DELETE FROM posts WHERE id=${id}`;
//     db.result(query)
//         .then((result) => {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(result));
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });
// //Example curl : curl --data "name=john&amp;email=john@example.com&password=abc123" http://localhost:3000/api/register
// app.post('/api/register', function (req, res) {
//     let data = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     };
//     if (data.name && data.email && data.password) {
//         let query = "INSERT INTO users(name, email, password) VALUES (${name}, ${email}, ${password}) RETURNING id";
//         db.one(query, data)
//             .then((result) => {
//                 db.one("SELECT * FROM users WHERE id=$1", [result.id])
//                     .then((results) => {
//                         res.setHeader('Content-Type', 'application/json');
//                         res.end(JSON.stringify(results));
//                     })
//                     .catch((e) => {
//                         console.error(e);
//                     });
//             })
//             .catch((e) => {
//                 console.error(e);
//             });
//     } else {
//         res.status(434).send('Name, email and password is required to register')
//     }
// });
// app.post('/api/login', function (req, res) {
//     let email = req.body.email;
//     let password = req.body.password;
//     if (email && password) {
//         db.one(`SELECT * FROM users WHERE email=${email}`)
//             .then((results) => {
//                 if (results.password == password) {
//                     res.setHeader('Content-Type', 'application/json');
//                     res.end(JSON.stringify(results));
//                 } else {
//                     res.status(434).send('Email/Password combination did not match')
//                 }
//             })
//             .catch((e) => {
//                 res.status(434).send('Email does not exist in the database')
//             });
//     } else {
//         res.status(434).send('Both email and password is required to login')
//     }
// });

  // app.get('/api/socialfeed_db', function(req, res){
  //   db.query('SELECT * FROM post')
  //   .then((results) => {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.end(JSON.stringify(results));
  //   })
    
  //   .catch((e) => {
  //     console.error(e);
  //   });
  //  });
// curl --data 'name=nick&email=nick@example.com&password=123abc’ http://localhost:3000/api/register

//    app.post('/api/register', function (req, res) {
//     let data = {
//       name : req.body.name,
//       email : req.body.email,
//       password : req.body.password
//     };
//     if (data.name && data.email && data.password) {
//       let query = "INSERT INTO users(name, email, password) VALUES (${name}, ${email}, ${password})";
//       db.result(query, data)
//           .then((result) => {
//               res.setHeader('Content-Type', 'application/json');
//               res.end(JSON.stringify(result));
//           })
//           .catch((e) => {
//               console.error(e);
//           });
//   } else {
//       res.status(434).send('Name, email and password are required to register')
//   }
// });
  
// app.get('/api/login/:email/:password', function (req, res) {
//   let email = req.params.email;
//   let password = req.params.password;
//   if(email && password) {
//       db.one(`SELECT * FROM users WHERE email=${email}`)
//       .then((results) => {
//           if(results.password == password) {
//               res.setHeader('Content-Type', 'application/json');
//               res.end(JSON.stringify(results));
//           } else {
//               res.status(434).send('Email/Password combination did not match')
//           }
//       })
//       .catch((e) => {
//           res.status(434).send('Email does not exist in the database')
//       });
//   } else {
//       res.status(434).send('Both email and password is required to login')
//   }
// });



// // A route for getting all the comments in your database

// app.get('/api/comments', function (req, res) {
//       db.query('SELECT * FROM comments')
//           .then((results) => {
//               res.setHeader('Content-Type', 'application/json');
//               res.end(JSON.stringify(results));
//           })
//           .catch((e) => {
//               console.error(e);
//           });
//   });

  // A route for getting all the comments from a single user

// app.get('/api/comments/:user_id', function (req, res) {
//     let userId = req.params.user_id;
//     db.query("SELECT * FROM comments WHERE user_id=$1", [userId])
//         .then((results) => {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(results));
//         })
//         .catch((e) => {
//             console.error(e);
//         });
// });

// A route for getting all the comments that belong to a post

// app.get('/api/comments/:post_id', function (req, res) {
//   let postId = req.params.post_id;
//   db.query("SELECT * FROM comments WHERE post_id=$1", [postId])
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });

// A route for getting all the users

// app.get('/api/users', function (req, res) {
//   db.query("SELECT * FROM users")
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });

// a route for getting a single user
// app.get('/api/users/:id', function (req, res) {
//       let id = req.params.id;
//       db.one("SELECT * FROM users WHERE id=$1", [id])
//           .then((results) => {
//               res.setHeader('Content-Type', 'application/json');
//               res.end(JSON.stringify(results));
//           })
//           .catch((e) => {
//               console.error(e);
//           });
//   });

// app.get('/api/comments', function (req, res) {
//   db.query('SELECT * FROM comments JOIN users on comments.user_id = users.id')
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });
// app.get('/api/comments/user/:id', function (req, res) {
//   let id = req.params.id;
//   db.query('SELECT * FROM comments JOIN users on comments.user_id = users.id WHERE users.id=$1', [id])
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });
// app.get('/api/comments/post/:id', function (req, res) {
//   let id = req.params.id;
//   db.query('SELECT * FROM comments JOIN users on comments.user_id = users.id WHERE comments.post_id=$1', [id])
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });
// app.get('/api/users', function (req, res) {
//   db.query('SELECT * FROM users')
//       .then((results) => {
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(results));
//       })
//       .catch((e) => {
//           console.error(e);
//       });
// });


  app.listen(3000, function() {
  console.log('The server is Listening...')
});



