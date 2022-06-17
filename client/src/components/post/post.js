import React from 'react'
import Viewer from '../3Dviewer';
import humanpic from '../../Assets/human.png';
import './post.scss';
export default function Post() {
  return (
    <div className='postpage'>
      <div className='postcontainer'>
        <div className='carousel'>
        <img className='crsImages' src={humanpic}/>
        </div>
        
        <Viewer/>
      </div>
      <div className='postText'> Hey i did this in blender</div>
    </div>
  )
}
