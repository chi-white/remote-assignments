const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
require('dotenv').config() ;

// Configure body-parser to parse JSON data
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'kimdb.clhgz7gmuaob.ap-southeast-2.rds.amazonaws.com',
  user: process.env.user,
  password: process.env.password,
  database: 'assignment',
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

/*----------------------------Sign Up--------------------------------------------------------------------*/

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const request_date = req.headers['request-date'];
  const insertUserQuery = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';

  db.query(insertUserQuery, [name, email, password, request_date], (err, results) => {
    if (err) {
      console.error('Error inserting user: ' + err.stack);
      if (err.code === 'ER_DUP_ENTRY'){
        return res.status(409).json({ error: 'Email Already Exists' });
      }else {
        return res.status(400).json({ error: 'Client Error Response' });
      }
    }
    const userId = results.insertId;
    const user = {
      id: userId,
      name,
      email,
    };
    // Return the user information in the response
    res.status(200).json({ data: {user, request_date} });
  });
});

/*----------------------------query--------------------------------------------------------------------*/
// app.get('/users', (req, res) => {
//   const {id} = req.query;
//   if (isNaN(id) || id<= 0){
//     return res.status(500).json({ error: "id" });
//   }

//   const request_date = req.headers['request-date'] ;

//   // DB
//   const selectUserQuery = 'SELECT id, name, email FROM user WHERE id = ?';
//   db.query(selectUserQuery, [id, request_date], (err, results) => {
//     if (err) {
//       console.error('Error querying user: ' + err.stack);
//       return res.status(400).json({ error: 'Client Error Response' });
//     }
//     if (results.length === 0) {
//       console.log('User Not Existing');
//       return res.status(403).json({ error: 'User Not Existing'});
//     }

//     const user = results[0];
//     console.log(user);
//     res.status(200).json({ data: {user, "request_date":request_date} });
    
//   });
// });

/*-----------------------------listen port------------------------------------------------------*/ 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




