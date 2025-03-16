import React from 'react';
import logo from './logo.svg';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate'; 
import { Job } from '../../models/job';
import './JobCard.scss';


const JobCard = ({ jobObject }: { jobObject: Job }) => {

    const getHowManyDaysSincePost = (postedDate: Date | any) => {
        const today : any = new Date();
        const diffTime = today - postedDate;  // Difference in milliseconds
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));  // Convert to days
        
        if (diffDays == 0) {
            return "today";
        }
        else if (diffDays == 1) {
            return "yesterday";
        }
        else if (diffDays > 30) {
            return `${postedDate.toLocaleDateString('en-US', {
                month: 'long',  // 'short' for abbreviated month (e.g., "Mar")
                day: 'numeric'  // Numeric day (e.g., 16)
              })}`
        }
        else if (diffDays > 1) {
            return `${diffDays} days ago`
        }
        else {
            return "N/A"
        }
    }

    
    return (
      <div className="job-card">
        <div className='job-card-logo-container'>
            <img className="job-card-logo" src="/placeholder-logo.jpg" alt="Job Image" />
        </div>
        <div className="job-card-content">
          <div className="job-title">{jobObject.name}</div>
          <div className="job-salary">{jobObject.company}</div>
          <div className="job-location">{jobObject.city},{jobObject.state} ({jobObject.workType})</div>
        </div>
        <div className='job-salary-date-container'>
            <div className='job-card-salary'>${jobObject.wage}/year</div>
            <div className='job-card-date-posted'>posted {getHowManyDaysSincePost(jobObject._createdAt)}</div>
        </div>
      </div>
    );
  };
  
  

export default JobCard;