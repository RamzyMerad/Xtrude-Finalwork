import React from 'react';
import "./jobs.scss";
import Jobscard from '../Jobscard/Jcard';
import NewJobs from './NewJobs';
import JobData from './JobData';
const Jobs = () => {
  return (
    <div>
      <div><button>post a job</button></div>
      <NewJobs/>
      <div className='JobsList'>
        <select defaultValue="Full time">
         <option value="Full time">Full time</option>
         <option value="Part time">Part time</option>
         <option value="Contract">Contract</option>
        </select>

      <select defaultValue="Remote">
        <option value="Remote">Remote</option>
        <option value="In-office">In-office</option>
      </select>
      <button>Search</button>
      </div>
      <div>
        
        
      </div>
    </div>
  );
}

export default Jobs;
