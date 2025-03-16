import React from 'react';
import logo from './logo.svg';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate'; 
import JobCard from './JobCard';
import { Job } from '../../models/job';
import { setJobList, setActiveJobId } from '../../redux/JobListSlice/jobList.slice';
import { RootState } from '../../redux/store';
import ActiveJob from './ActiveJob';


const JobListContainer = () => {
    const itemsPerPage = 10;
    const dispatch = useDispatch();

    // const allJobs = Array.from({ length: 105 }, (_, i) => `Item ${i + 1}`);
    // const allJobs = new Array();

    const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
    const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);

    const [items,setItems] = useState([...allJobs.slice(0,itemsPerPage)]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    
    const handlePageClick = (event:any) => {
        setCurrentPage(event.selected);
    };

    const handleCardClick = (jobObject:Job) => {
        // set redux to active
        console.log("maheer", jobObject._id)
        dispatch(setActiveJobId(jobObject._id))
        // remove active className of previously active
        // add active to the new one
    };
    
    const offset = currentPage * itemsPerPage;

    useEffect(() => {
        let newJobList = new Array<Job>;

        for (let i = 0 ; i < 150; ++i){
            const newJob : Job  = {
                _id: `${i}`,
                employerId: `${i}`,
                employmentType: "Part-Time",
                name : `Job number ${i}`,
                _createdAt : new Date().toISOString(),
                workType : "Remote",
                wage : 100000,
                city : "Chicago",
                state: "IL",
                company: `Company number ${i}`,
                employerPhone: "1234567890",
                employerEmail:"employer@email.com",
                industry:"Food",
                description: `This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description.

                This is the employer submitted job description. 
                This is the employer submitted job description. 
                This is the employer submitted job description. 
                
                This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. `
            }
            
            newJobList.push(newJob);
        } 
        
        dispatch(setJobList(newJobList));
        
    },[]);

    useEffect(()=> {
        setItems([...allJobs.slice((offset), (offset)+itemsPerPage)]);
    }, [currentPage, allJobs]);

    return (
        <div>
        <div className='job-list-and-details'>
            <div className='job-list-window'>
                {items.map((currentJob : Job, index: number) => (
                    <JobCard 
                        jobObject={currentJob}
                        onClick={()=>{handleCardClick(currentJob)}}
                    />
                ))}
            </div>
            <div className='job-active-details'>
                <ActiveJob/>
            </div>
        </div>
        
        <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={Math.ceil(allJobs.length / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
        </div>
    );
};

export default JobListContainer;