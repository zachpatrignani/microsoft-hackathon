import React from 'react';
import logo from './logo.svg';
import './JobBoard.scss';
import JobFilter from '../components/JobFilter/job-filter';
import JobListContainer from '../components/JobList/JobListContainer';

function JobBoard() {
  return (
    // <JobFilter />
    <div className='jobBoard'>
        <a href="/add-job">Add Job</a>
        <JobListContainer/>
    </div>
  );
}

export default JobBoard;
