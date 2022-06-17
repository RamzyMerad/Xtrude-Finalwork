import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Image from './fd3bc294ad02ef959f18b1593ccb6ec4.webp';
import "./profile.scss";
import {verify} from 'jsonwebtoken-esm';
import {getJwt} from '../../api';

export default function Profile() {
  const [token, setToken] = useCookies(['token']);
  const [user,setUser] = useState({});
  useEffect(() => {
   decoded();
  }, []);

  useEffect(() => {
   console.log(user);
  }, [user]);
  
  const decoded = async()=>{
    console.log(token.token.token);
    const decoded = await getJwt(token.token.token,'ramz');
    setUser(decoded);
    console.log(token.token);
  }

  // const updateProfile =(e)=>{
  //   e.preventDefault();
    
  // };

  return (
    <div className='profile'> 
    <div className='backimage'>
      
    </div>
    <img className='pp' src={Image}></img>
    <form>
    <label>
        <input type="text" name="username" value={user.name}/>
      </label>
      <label>
        <input type="text" name="bio" value={user.bio}/>
      </label>
    {/* <button type='submit' onSubmit={(e)=>updateProfile(e)}>Update</button> */}
    </form></div>

  )
}
