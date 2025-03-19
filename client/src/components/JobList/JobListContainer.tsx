import React from 'react';
import logo from './logo.svg';
import './JobListContainer.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate'; 
import JobCard from './JobCard';
import { Job } from '../../models/job';
import { setJobList, setActiveJobId, setCurrentPage } from '../../redux/JobListSlice/jobList.slice';
import { RootState } from '../../redux/store';
import ActiveJob from './ActiveJob';
import { clearJobs } from '../../redux/ExportSlice/exportSlice';
import { getJobs } from '../../services/jobServices';


const JobListContainer = () => {
    const itemsPerPage = 10;
    const dispatch = useDispatch();

    const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
    const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);

    const [items,setItems] = useState([...allJobs.slice(0,itemsPerPage)]);
    const currentPage = useSelector((state: RootState) => state.jobList.currentPage);
    
    const selectedPageMap = useSelector((state: RootState) => state.exportSlice.allSelectedJobs);

    const handlePageClick = (event:any) => {
        dispatch(setCurrentPage(event.selected));
    };

    const handleCardClick = (jobObject:Job) => {
        dispatch(setActiveJobId(jobObject._id));
    };
    
    const offset = currentPage * itemsPerPage;


    const populatingJobRedux = async () => {
        const jobs : any = await getJobs(300);
        dispatch(setJobList(jobs.data.data));
    }

    useEffect(()=>{
        populatingJobRedux();
    },[]);

    useEffect(()=> {
        
        setItems([...allJobs.slice((offset), (offset)+itemsPerPage)]);
        const allCards = document.querySelectorAll('.job-card');
        allCards.forEach((card) => {
            card.classList.remove('active-card');
        });
    }, [currentPage, allJobs]);


    const clearSelections = () => {
        dispatch(clearJobs());
    }

    useEffect(()=>{
        dispatch(setActiveJobId(items[0]?._id))
    }, [items]);


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
        
        <div className="footer">

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
            

            <div className='export-button-container'>
                <div className='clear-selections' onClick={clearSelections}>Clear</div>
                <button disabled={selectedPageMap.size <= 0}>export{selectedPageMap.size > 0 ? ` (${selectedPageMap.size})` : ""}</button>
            </div>
            
            
        </div>
        </div>
    );
};

export default JobListContainer;