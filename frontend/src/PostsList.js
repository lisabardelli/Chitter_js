// import React from 'react'

// class PostsList extends React.Component {
//     constructor() {
//       super();
//       this.state = { posts: [] };
//       this.getPosts()
//     }
//     getPosts(){
//         fetch('http://localhost:3001')
//         .then(response => response.json())
//           .then(data => {
//               console.log("data", data)
//             // let tmpArray = []
//             // data.map((post) => {
//             //   tmpArray.push(post.message)
//             //   console.log("tmpArray", tmpArray)
//             // })
//             //     this.setState({
//             //         posts: tmpArray
//             //     })
//             this.setState({ posts: data });
//                 console.log(this.state.posts)
//             console.log('Success:', this.setState);
//             })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//        }

//        render () {
//         // return (
//             console.log("array", this.state.posts) 
//             return(
//               <div>
//                 <p>Posts</p>
//               <ul>
//                 {this.state.posts.map(post => (
//                   <li>{post}</li>
//                 ))}
//               </ul>
//               </div>
//             )
         
//         }

// }

// export default PostsList
