import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Posts extends Component{
    state = {

        posts: [{id:1,name:"post 1"},
        {id:2,name:"post 2"},
        {id:3,name:"post 3"}]
    };
    render(){
    return ( 
        <React.Fragment>
        <h1>This is Posts Page</h1>
        <ul>
            {this.state.posts.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.name}</Link></li>)}
        </ul>
        </React.Fragment>
     );
    };
}


export default Posts;