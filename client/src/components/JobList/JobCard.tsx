import React from 'react';
import logo from './logo.svg';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate'; 
import { Job }  from '../../redux/JobListSlice/jobList.slice';
import './JobCard.scss';


const JobCard = ({ jobObject }: { jobObject: Job }) => {
    return (
      <div className="job-card">
        <div className="job-card-content">
          <h3 className="job-title">{jobObject.title}</h3>
          <p className="job-salary">${jobObject.salary}</p>
          <p className="job-remote">{jobObject.remote ? "Remote" : "On-site"}</p>
        </div>
      </div>
    );
  };
  
  

export default JobCard;