import React, {
    useEffect,
    useState
  } from 'react';
  import {getComments} from '../../api';
  import { useCookies } from "react-cookie";
  import socketIOClient from "socket.io-client";
  import { useNavigate } from 'react-router-dom';
  
  const ENDPOINT = "http://127.0.0.1:2000/";


const Comment = (props) => {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const navigate= useNavigate();
    const [token] = useCookies(['token']);
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("comment", data => {
            getComments().then(response => {
                setComments(response);
            })
        });
        getComments().then(response => {
            setComments(response);
        })

    }, []);
    if(!token.token) {
        return navigate("/login");
    }

    return (
        <div className = 'comments'>
            {
                comments.map(comment => ( 
                    <div className = 'comment' >
                        {comment.post_id == props.postId ? <span>{comment.comment}</span> : <span></span>}
                    </div> 
                ))
            }

        </div>
    );
}

export default Comment;
