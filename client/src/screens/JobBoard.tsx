import React from 'react';
import logo from './logo.svg';
import './JobBoard.scss';
import JobFilter from '../components/JobFilter/job-filter';
import JobListContainer from '../components/JobList/JobListContainer';

function JobBoard() {
  return (
    // <JobFilter />
    <div className='jobBoard'>
        <JobListContainer/>
    </div>
  );
}

export default JobBoard;
