const Pool = require('pg').Pool
const pool = new Pool({
  user: 'lisa',
  host: 'localhost',
  database: 'jschitter',
  password: 'root',
  port: 5432,
});

const getPosts = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
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
        resolve(`A new post has been added: ${results.rows[0]}`)
      })
    })
  }
  const deletePost = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`post deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getPosts,
    createPost,
    deletePost,
  }