import React from 'react';
import logo from './logo.svg';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate'; 
import { Job } from '../../models/job';
import './JobCard.scss';
import { RootState } from '../../redux/store';
import axios from 'axios';

interface JobCardProps {
    jobObject: Job;
    onClick: (event: any) => void; // Define the onClick prop type
}


const JobCard: React.FC<JobCardProps> = ({ jobObject, onClick }) => {

    const getHowManyDaysSincePost = (postedDateIsoString: Date | any) => {
        const postedDate: any = new Date(postedDateIsoString)
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

    const [logo, setLogo] = useState<string>("/placeholder-logo.jpg")

    const checkUrl = async () => {
        const website = jobObject?.company.replace(" ", "");
        const url = `https://logo.clearbit.com/${website}.com`;
        try{
            await axios.get(url);  
            setLogo(url);
        } 
        catch{
            setLogo("./placeholder-logo.jpg")
        }
    }

    useEffect(() => {
        checkUrl();
    }, [jobObject.company]);

    const handleCardClick = (event: any) => {
        
        const allCards = document.querySelectorAll('.job-card');
        allCards.forEach((card) => {
            card.classList.remove('active-card');
        });
    
        // Add the "active" class to the clicked card
        event.currentTarget.classList.add('active-card');
    
        // Call the parent onClick handler (optional if you want to pass the jobObject)
        onClick(jobObject);
        };

    
    return (
      <div className="job-card" onClick={handleCardClick}>
        <div className='job-card-logo-container'>
            <img 
            className="job-card-logo"
            src={logo}
            onError={(e)=>{
                const target = e.currentTarget; // Get the image element
                target.onerror = null; // Prevent infinite loop
                target.src = "./placeholder-logo.jpg"; // Set fallback image
            }}
            alt="Job Image" />
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