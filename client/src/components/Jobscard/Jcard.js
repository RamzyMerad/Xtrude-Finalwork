import React from 'react';
import JobData from '../Jobs/JobData';

const skills = ["Blender", "Maya", "Autocad"]

const Jobscard = () => {
  return (
    <div>
      <ul>
        <li>
          <p>{JobData.title}</p>
          <p>{JobData.companyname}</p>
          <ul>
            
            {skills.map(skill=> <li key={skill}>{skill}</li>)}
          </ul>
          <p>100min ago| Full time | Remote</p>
          <button>check</button>
        </li>
      </ul>
    </div>
  );
}

export default Jobscard;
