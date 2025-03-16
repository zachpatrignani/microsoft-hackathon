import React from 'react';
import logo from './logo.svg';
import './JobBoard.scss';
import JobFilter from '../components/JobFilter/job-filter';
import JobListContainer from '../components/JobList/JobListContainer';
import ActiveJob from '../components/ActiveJob/ActiveJob';

function JobBoard() {
  return (
    // <JobFilter />
    <div className='jobBoard'>
        <JobListContainer/>
        <ActiveJob/>
    </div>
  );
}

export default JobBoard;
