import React from 'react';
import logo from './logo.svg';
import './ActiveJob.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Job } from '../../models/job';
import JobNotesGenerator from './JobNotesGenerator'
import axios from 'axios';


function ActiveJob() {

  const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
  const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);

  const [matchNotesAvailable, setMatchNotesAvailable] = useState<boolean>(false);
  const [challengeNotesAvailable, setChallengeNotesAvailable] = useState<boolean>(false);

  const [activeJobObject, setActiveJobObject] = useState<Job>(allJobs[0]);
  
  useEffect(()=>{
    const foundJob = allJobs.find((job) => job._id === activeJobId);
    if (foundJob !== undefined) {
      setActiveJobObject(foundJob);
    }
  },[activeJobId])


  const getBulletedListItems = (rawString : string | undefined, delimiter: string) => {
    let output =  rawString?.split(delimiter);
    if (output !== undefined && output?.length > 0){
      if (output[output.length - 1] === ""){
        output.pop();
      }

    }
    return output;
  }

  const visitSite = (website: string | undefined) => {
    if (website !== undefined){
      window.open("https://" + website + "/careers", '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className='ActiveJobView'>

      <div className='header-container'>
        <div className="logo-container">
          <img className="logo" src={`https://logo.clearbit.com/${activeJobObject?.website}`} alt="" />
        </div>
        <div className='main-title'>
          {activeJobObject?.name}
          <div className="visit-link" onClick={()=>{visitSite(activeJobObject?.website)}}>
            Visit Careers Site ⇥
          </div>
        </div>
        <JobNotesGenerator/>
        <div>
        </div>
      </div>

      <div className='job-details-container'>
        <div className='secondary-title'>
          {activeJobObject?.company}
        </div>
        <div className="job-location">{activeJobObject?.city},{activeJobObject?.state} - {activeJobObject?.workType}, {activeJobObject?.employmentType}</div>
        <div className='job-salary'>${activeJobObject?.wage}/year</div>
        <div className='job-date-posted'> posted {new Date(activeJobObject?._createdAt).toDateString()}</div>
      </div>

      <div className='job-details-container'>
        <div className='secondary-title'> Contact:</div>
        <div className="employer-phone">{activeJobObject?.employerPhone}</div>
        <div className="employer-email">{activeJobObject?.employerEmail}</div>
      </div>
      
      {(matchNotesAvailable && 
        <div className='job-details-container'>
          <div className='colored-container match'>
            <div className='secondary-title'> Matching Strengths:</div>
            <div>TThis is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description</div>
          </div>
        </div>
      )}

      {(challengeNotesAvailable && 
        <div className='job-details-container'>
          <div className='colored-container challenge'>
            <div className='secondary-title'> Potential Challenges:</div>
            <div>TThis is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description</div>
          </div>
        </div>
      )}

      <div className='job-details-container'>
        <div className='secondary-title'>Job Description</div>
        <div className="job-description">{activeJobObject?.description}</div>

      </div>

      <div className='job-details-container'>
        <div className='secondary-title'>Responsibilities</div>
        <div className="job-description">
          <ul>
            {getBulletedListItems(activeJobObject?.responsibilities, ". ")?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className='job-details-container'>
        <div className='secondary-title'>Skills</div>
        <div className="job-description">
          <ul>
            {getBulletedListItems(activeJobObject?.skills, " and ")?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
      
      
    </div>
  );
}

export default ActiveJob;
