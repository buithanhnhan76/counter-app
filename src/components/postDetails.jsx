import React from 'react';
const PostDetails = (props) => {
    return ( 
        <div>
            <h1>This is post details</h1>
            <h2>Post {props.match.params.id}</h2>
        </div>
     );
}
 
export default PostDetails;