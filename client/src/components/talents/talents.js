import React from 'react'
import { useState,useEffect } from 'react';
import Header from '../header';
import { getUsers } from '../../api';
import "./talents.scss";
export default function Talents() {

const [query, setQuery] = useState("");
const [users, setUsers] = useState([]);
const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchUsers();
}, []);

 const fetchUsers=async()=>{
  setUsers(await getUsers());
 };

  return (
    <div className="talentspage">
    <Header/>
    <div className="talentscontainer">
      <label className='levellabel'>
        <p>LEVEL</p>
        <select name="level" onClick={(e)=>setFilter(e.target.value)} >
          <option value="Junior">Junior</option>
          <option value="Master">Master</option>
          <option value="Senior">Senior</option>
        </select>
       </label>

      <input  type ="text" placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
      <ul className='userList'>
        {users.filter((user)=>user.name.toLowerCase().includes(query) && user.level===filter).map((user)=>(
          <li key={user.id} className='userItem'>{user.name}-{user.level}
          
          </li>
        ))}

      </ul>

      <label className='locationlabel'>
        <p>LOCATION</p>
        <select name="type" onClick={(e)=>setFilter(e.target.value)} >
          <option value="Brussels">Brussels</option>
  
        </select>
       </label>

       <label className='typelabel'>
        <p>TYPE</p>
        <select name="type" onClick={(e)=>setFilter(e.target.value)} >
          <option value="Freelancer">Freelancer</option>
  
        </select>
       </label>

       <label className='tagslabel'>
        <p>TAGS</p>
        <select name="type" onClick={(e)=>setFilter(e.target.value)} >
  
        </select>
       </label>

    </div>
    </div>
  )
}
