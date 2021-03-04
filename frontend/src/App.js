import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

   getPosts() {
    fetch('http://localhost:3001')
    .then(response => response.json())
      .then(data => {
        let tmpArray = []
        data.map((post) => {
          tmpArray.push(post.message)
          // console.log("tmpArray", tmpArray)
        })
            this.setState({
                posts: tmpArray
            })
        console.log('Success:', this.setState);
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
          return (
            <div>
           
          <div>
              <h1>posts</h1>
              { this.state.posts.map(post => (

                      <p> {post.name} </p>
                  ))
              }
              </div>
              <button onClick={ this.createPost }>Add post</button>
              <button onClick={ this.deletePost }>Delete post</button>
            </div>
          );
          }
}


export default App