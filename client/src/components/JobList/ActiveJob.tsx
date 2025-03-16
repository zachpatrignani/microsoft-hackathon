import React from 'react';
import logo from './logo.svg';
import './ActiveJob.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Job } from '../../models/job';


function ActiveJob() {

  const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
  const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);

  const [matchNotesAvailable, setMatchNotesAvailable] = useState<boolean>(false);
  const [challengeNotesAvailable, setChallengeNotesAvailable] = useState<boolean>(false);

  const [activeJobObject, setActiveJobObject] = useState<Job>(allJobs[0]);
  
  useEffect(()=>{
    console.log("hit");
    const foundJob = allJobs.find((job) => job._id === activeJobId);
    if (foundJob !== undefined) {
      setActiveJobObject(foundJob);
    }
  },[activeJobId])



  return (
    <div className='ActiveJobView'>

      <div className='header-container'>
        <div className="logo-container">
          <img className="logo" src="./placeholder-logo.jpg" alt="" />
        </div>
        <div className='main-title'>
          {activeJobObject?.name}
        </div>
      </div>

      <div className='job-details-container'>
        <div className='secondary-title'>
          {activeJobObject?.company}
        </div>
        <div className="job-location">{activeJobObject?.city},{activeJobObject?.state} ({activeJobObject?.workType})</div>
        <div className='job-card-salary'>${activeJobObject?.wage}/year</div>
        <div className='job-card-date-posted'> posted {new Date(activeJobObject?._createdAt).toDateString()}</div>
      </div>


      <div className='employer-details'></div>
        <div className="employer-phone">{activeJobObject?.employerPhone}</div>
        <div className="employer-email">{activeJobObject?.employerEmail}</div>
        
      <div className='job-details'></div>
      {(matchNotesAvailable && 
        <div className='match-note-container'>
        </div>
      )};

      {(challengeNotesAvailable && 
        <div className='challenge-note-container'>
        </div>
      )};

      <div className='job-description-container'>
        <h3>About</h3>
        <div className="job-description">{activeJobObject?.description}</div>

      </div>
      
      
    </div>
  );
}

export default ActiveJob;
