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

import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import { createPage } from '../../services/exportService';

import { renderToStaticMarkup } from 'react-dom/server';
import html2canvas from "html2canvas";
import rehypeRaw from 'rehype-raw';
import { Note } from '../../models/note';


const JobListContainer = () => {
    const itemsPerPage = 30;
    const dispatch = useDispatch();

    const allJobs = useSelector((state: RootState ) => state.jobList.allJobs);
    const activeJobId = useSelector((state: RootState ) => state.jobList.activeJobId);
    const jobFilters = useSelector((state: RootState) => state.jobFilters.filters);
    // const [items,setItems] = useState([...allJobs.slice(0,itemsPerPage)]);
    const currentPage = useSelector((state: RootState) => state.jobList.currentPage);
    
    const selectedPageMap = useSelector((state: RootState) => state.exportSlice.allSelectedJobs);
    const notesMap = useSelector((state: RootState) => state.noteSlice.allGeneratedNotes);

    const handlePageClick = (event:any) => {
        dispatch(setCurrentPage(event.selected));
    };

    const handleCardClick = (jobObject:Job) => {
        dispatch(setActiveJobId(jobObject._id));
    };
    
    // const offset = currentPage * itemsPerPage;


    const populatingJobRedux = async () => {
        const jobs : any = await getJobs(currentPage+1, itemsPerPage, jobFilters);
        const allCards = document.querySelectorAll('.job-card');
        
        dispatch(setJobList(jobs.data.data));
        

        if (allCards[0] !== undefined) {
            allCards.forEach((card) => {
                card.classList.remove('active-card');
            });
            allCards[0].classList.add('active-card');

        }
    }

    useEffect(()=>{
        populatingJobRedux();
    },[jobFilters, currentPage]);



    const clearSelections = () => {
        dispatch(clearJobs());
    }

    useEffect(()=>{
        dispatch(setActiveJobId(allJobs[0]?._id))
    }, [allJobs]);

    
    const exportMap = useSelector((state: RootState) => state.exportSlice.allSelectedJobs);


    
    const exportPdf = async () => {
        
        const doc = new jsPDF();
        let index = 0;
        doc.setFontSize(8);

        for (const value of Array.from(exportMap.values())) {
            if (index > 0) {
                doc.addPage();
            }
            
            let noteBlurbs;
            if (value._id !== undefined){
                noteBlurbs = notesMap.get(value._id)
            }

            if (noteBlurbs === undefined) {
                noteBlurbs = {
                    challengeNotes : [],
                    matchNotes: [],
                    jobId: ""
                };
            }
            

            const htmlString = renderToStaticMarkup(
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]} // Enable raw HTML processing
                    skipHtml={false} // Ensure raw HTML is not skipped
                >
                    {createPage(value, noteBlurbs)}
                </ReactMarkdown>
            );

            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlString;
            tempDiv.style.width = "800px"; // Ensure it renders properly
            tempDiv.style.padding = "20px";
            document.body.appendChild(tempDiv);

            // Convert the HTML to canvas
            const canvas = await html2canvas(tempDiv, { scale: 1 });
            const imgData = canvas.toDataURL("image/png");

            // Calculate image width/height for A4 page
            const pdfHeight = 200;
            
            // const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            const pdfWidth = (canvas.width * pdfHeight) / canvas.height;
            // Add image to the PDF
            doc.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight);

            // Remove temporary div
            document.body.removeChild(tempDiv);

            if (index === exportMap.size - 1) {
                doc.save("helping-hand-jobs.pdf");
            }

            index += 1;
        }
        
    }


    return (
        <div>
        <div className='job-list-and-details'>
            <div className='job-list-window'>
                {allJobs.map((currentJob : Job, index: number) => (
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
                pageCount={currentPage + 5}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
            

            <div className='export-button-container'>
                {selectedPageMap.size > 0 && <div className='clear-selections' onClick={clearSelections}>Clear</div>}
                <button disabled={selectedPageMap.size <= 0} onClick={exportPdf}>export{selectedPageMap.size > 0 ? ` (${selectedPageMap.size})` : ""}</button>
            </div>
            
            
        </div>
        </div>
    );
};

export default JobListContainer;