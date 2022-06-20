import React, {
  useEffect,
  useState
} from 'react';
import { createPost, getPosts } from '../../api';
import "./style.scss";
import { useCookies } from "react-cookie";
import socketIOClient from "socket.io-client";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Comment from '../comments/index.js'
import PostinputComment from '../comments/postInput.js'
import image from '../feed/7ba8ec4a42b529dcbbc695ce0dd07a4a.webp';
import { getUsers } from '../../api';

const ENDPOINT = "http://127.0.0.1:2000";



const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [token] = useCookies(['token']);
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("post", data => {
      console.log(token);
      getPosts().then(response => {
        setPosts(response);
      })
    });
    getPosts().then(response => {
      setPosts(response);
    })

  }, []);
  if (!token.token) {
    return navigate("/login");
  }

  return (
    <div className='feed'>

      <div className='profil' >
        <div className='backgroundImage'>
          <img className='profileImage' src={image} alt='profile' />
        </div>
        <div className='profilInfo'>
          <span className='id_name'>@Ramz3d</span>
          <h6 className='name'>Ramzy Merad</h6>
          <p className='bio'>"The creative adult is the child who survived."</p>
          <div className='follow d-flex justify-content-around'>
            <div>
              <h3>7k</h3>
              <p>Following</p>
            </div>
            <div>
              <h3>140k</h3>
              <p>Followers</p>
            </div>
          </div>
          <Link to="/profile"><button className='myProfile btn text-white py-3'>My profile</button></Link>
        </div>
      </div>
      <div className='posts'>
        <Postinput />
        <div className='publications'>

          {
            posts.map(post => (
              <div className='post' >
                <div className='user-profile'>
                  <img src={image}></img>
                  <div>
                    <p>username <span></span></p>
                    <span>24/06/2022 12:30</span>
                    <p key={post.id}> {post.content} </p>
                  </div>
                </div>
                <div className='post-row mt-3'>
                  <div className='activity-icons d-flex w-100 justify-content-around'>
                    <div className='buttonInteraction'>
                      <i class="fa-light fa-heart"></i>
                      <button className='btn'>Like</button>
                      <span className='numberOfIntercation'>120</span>
                    </div>
                    <div className='buttonInteraction'>
                      <button className='btn'>comment</button>
                      <span className='numberOfIntercation'>2</span>
                    </div>
                    <div className='buttonInteraction'>
                      <button className='btn'>repost</button>
                      <span className='numberOfIntercation'>20</span>
                    </div>
                    <div className='buttonInteraction'>
                      <button className='btn'>save</button>
                    </div>
                  </div>
                </div>
                <div>
                  <PostinputComment postId={post.id} />
                </div>
                <div>
                  <Comment postId={post.id} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='trends' >
        <h2>Trends for you</h2>
        <div className='trendsTags'>
          <p className='mb-0 pb-0'>#3dAwards</p>
          <span className='tagComment'>97k interaction</span>
          <p className='mt-2 mb-0'>#PixarFestival</p>
          <span className='tagComment'>97k interaction</span>
          <p className='mt-2 mb-0'>#ArtistRights</p>
          <span className='tagComment'>97k interaction</span>
        </div>
        <a>Show more</a>
      </div>

    </div>

  );
}
const Postinput = () => {
  const submitPost = (e) => {
    e.preventDefault();
    console.log(e.target.postid.value);
    const post = {
      id: Math.round(Math.random() * 1000),
      content: e.target.postid.value
    };
    createPost(post);
    e.target.postid.value = "";
  }

  return (
    <div className='postInput'>
      <div className='writeBox'>
        <div className='user-profile me-3'>
          <img src={image}></img>
        </div>
        <form className='d-flex align-items-center' onSubmit={(e) => submitPost(e)}>
          <input className='inputFeed form-control shadow-none' name="postid" placeholder="What's happening?" />
          <button className='d-none' type='submit'>Submit</button>
        </form>
      </div>
      <div className='add-buttons'>
        <a href='#'><button>Photo</button></a>
        <a href='#'><button>Video</button></a>
        <a href='#'><button>3D Viewer</button></a>
      </div>
    </div>


  );
}
export default Feed;
