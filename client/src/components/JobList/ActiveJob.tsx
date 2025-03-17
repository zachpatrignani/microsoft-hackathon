import React from 'react';
import logo from './logo.svg';
import './ActiveJob.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Job } from '../../models/job';
import axios from 'axios';


function ActiveJob() {

  const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
  const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);

  const [matchNotesAvailable, setMatchNotesAvailable] = useState<boolean>(true);
  const [challengeNotesAvailable, setChallengeNotesAvailable] = useState<boolean>(true);

  const [activeJobObject, setActiveJobObject] = useState<Job>(allJobs[0]);
  
  useEffect(()=>{
    console.log("hit");
    const foundJob = allJobs.find((job) => job._id === activeJobId);
    if (foundJob !== undefined) {
      setActiveJobObject(foundJob);
    }
  },[activeJobId])

  const [logo, setLogo] = useState<string>("");

  const checkUrl  = async () => {
    const website = activeJobObject?.company.replace(" ","");
    const url = `https://logo.clearbit.com/${website}.com`;

    try {
      await axios.get(url);
      setLogo(url);
    }
    catch{
      setLogo("./placeholder-logo.jpg");
    }
  }

  useEffect(()=>{
    checkUrl();
  },[activeJobId])



  return (
    <div className='ActiveJobView'>

      <div className='header-container'>
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className='main-title'>
          {activeJobObject?.name}
        </div>
        <div className='export-button-container'>
          <button>export</button>
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
        <div className='job-details-container match'>
          <div className='secondary-title'> Matching Strengths:</div>
          <div>TThis is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description</div>
        </div>
      )};

      {(challengeNotesAvailable && 
        <div className='job-details-container challenge'>
          <div className='secondary-title'> Potential Challenges:</div>
          <div>TThis is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description</div>
        </div>
      )};

      <div className='job-details-container'>
        <div className='secondary-title'>About</div>
        <div className="job-description">{activeJobObject?.description}</div>

      </div>
      
      
    </div>
  );
}

export default ActiveJob;
