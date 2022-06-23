import React from 'react';

const NewJobs = () => {
  return (
    <div>
      <div>
        <h1>New job</h1>
      </div>
      <div>
        <form >
          <label>
            <p>job title</p>
            <input type="text" placeholder='job' />
          </label>
          <select defaultValue="Full time">
         <option value="Full time">Full time</option>
         <option value="Part time">Part time</option>
         <option value="Contract">Contract</option>
        </select>
        <input type="text" placeholder='Company name' />
        <input type="text" placeholder='Company url' />
        <select defaultValue="Remote">
        <option value="Remote">Remote</option>
        <option value="In-office">In-office</option>
      </select>
        <input type="text" placeholder='Joblink' />
        <input type="text" placeholder='Job description' />
        </form>
      </div>
    </div>
  );
}

export default NewJobs;
