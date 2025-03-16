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

  const [activeJobObject, setActiveJobObject] = useState<Job>(allJobs[0]);
  
  useEffect(()=>{
    console.log("hit");
    const foundJob = allJobs.find((job) => job._id === activeJobId);
    if (foundJob !== undefined) {
      setActiveJobObject(foundJob);
    }
  },[activeJobId, allJobs])



  return (
    <div className='ActiveJobView'>
      <div>{activeJobObject.name}</div>
    </div>
  );
}

export default ActiveJob;
