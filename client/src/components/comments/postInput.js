import React from 'react';
import {createComment} from '../../api';

const PostinputComment = (props)=>{
    const submitComment =(e)=>{
        e.preventDefault();
        console.log('Props : '+props.postId)
        const comment ={
            id:Math.round(Math.random()*1000),
            comment:e.target.commentId.value,
            post_id:props.postId
        };
        createComment(comment);
        e.target.commentId.value ="";
    }

    return(
        <div className='d-none'>
            <form onSubmit={(e)=>submitComment(e)}>
                <input name="commentId" placeholder="Comment"/>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default PostinputComment;
