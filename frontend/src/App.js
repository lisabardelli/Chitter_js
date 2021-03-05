import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
    this.getPosts()
  }

   getPosts() {
    fetch('http://localhost:3001')
    .then(response => response.json())
      .then(data => {
        // console.log("data app file", data)
        let tmpArray = []
        data.map((post) => {
          tmpArray.push(post.message)
          // console.log("tmpArray", tmpArray)
        })
            this.setState({
                posts: tmpArray
            })
        })
      .catch((error) => {
        console.error('Error:', error);
      });
   }


   createPost() {
    let message = prompt('Enter post message');
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        this.getPosts();
      });
  }

   deletePost() {
    let id = prompt('Enter post id');
    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        this.getPosts();
      });
  }


  render () {
    console.log("array", this.state.posts) 
          return (
            <div>
           
          <div>
              <h1>posts</h1>
              <div className="container">
              { this.state.posts.map(post => (
                        
                              <div className="item"> {post} </div>
                       
                  ))
              }
           </div>
              </div>
              <button onClick={ this.createPost }>Add post</button>
              <button onClick={ this.deletePost }>Delete post</button>
            </div>
          );
          }
}


export default App