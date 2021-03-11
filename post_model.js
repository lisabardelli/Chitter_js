const Pool = require('pg').Pool
const pool = new Pool({
  user: 'lisa',
  host: 'localhost',
  database: 'jschitter',
  password: 'No password',
  port: 5432,
});



const getPosts = () => {

// console.log("inside getposts")
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        // console.log(results.rows[1])
        resolve(results.rows);
      })
    }) 
  }
  const createPost = (body) => {
    return new Promise(function(resolve, reject) {
      const { message } = body
      pool.query('INSERT INTO posts (message) VALUES ($1) RETURNING *', [message], (error, results) => {
        if (error) {
          reject(error)
        }
  
        resolve(`A new post has been added`)
      })
    })
  }
  
  module.exports = {
    getPosts,
    createPost,

  }