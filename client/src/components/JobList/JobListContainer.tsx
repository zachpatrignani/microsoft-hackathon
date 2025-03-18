import React from "react";
import logo from "./logo.svg";
import "./JobListContainer.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import JobCard from "./JobCard";
import { Job } from "../../models/job";
import {
  setJobList,
  setActiveJobId,
  setCurrentPage,
} from "../../redux/JobListSlice/jobList.slice";
import { RootState } from "../../redux/store";
import ActiveJob from "./ActiveJob";

const JobListContainer = () => {
  const itemsPerPage = 10;
  const dispatch = useDispatch();

  const allJobs = useSelector((state: RootState) => state.jobList.allJobs);
  const activeJobId = useSelector(
    (state: RootState) => state.jobList.activeJobId,
  );
  const jobFilters = useSelector(
    (state: RootState) => state.jobFilters.filters,
  );
  const [items, setItems] = useState([...allJobs.slice(0, itemsPerPage)]);
  const currentPage = useSelector(
    (state: RootState) => state.jobList.currentPage,
  );

  const handlePageClick = (event: any) => {
    dispatch(setCurrentPage(event.selected));
  };

  const handleCardClick = (jobObject: Job) => {
    dispatch(setActiveJobId(jobObject._id));
  };

  const offset = currentPage * itemsPerPage;

  useEffect(() => {
    let newJobList = new Array<Job>();

    const famousBusinesses = [
      "McDonalds",
      "Burger King",
      "Wendys",
      "Subway",
      "Starbucks",
      "KFC",
      "Chick-fil-A",
      "Taco Bell",
      "Dominos Pizza",
      "Pizza Hut",
      "Chipotle",
      "Dunkin",
      "Five Guys",
      "Panda Express",
      "Olive Garden",
      "Walmart",
      "Target",
      "Macys",
      "Nordstrom",
      "Best Buy",
    ];

    for (let i = 0; i < 150; ++i) {
      const newJob: Job = {
        _id: `${i}`,
        employerId: `${i}`,
        employmentType: "Part-Time",
        name: `Job number ${i}`,
        _createdAt: new Date().toISOString(),
        workType: "Remote",
        wage: 100000,
        city: "Chicago",
        state: "IL",
        company: famousBusinesses[i % famousBusinesses.length],
        employerPhone: "1234567890",
        employerEmail: "employer@email.com",
        industry: "Food",
        description: `This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description. This is the employer submitted job description.

                This is the employer submitted job description.
                This is the employer submitted job description.
                This is the employer submitted job description.

                This is the employer submitted job description. This is the employer submitted job description This is the employer submitted job description. This is the employer submitted job description. `,
      };

      newJobList.push(newJob);
    }
    console.log("here");
    dispatch(setJobList(newJobList));
  }, [jobFilters]);

  useEffect(() => {
    setItems([...allJobs.slice(offset, offset + itemsPerPage)]);
    const allCards = document.querySelectorAll(".job-card");
    allCards.forEach((card) => {
      card.classList.remove("active-card");
    });
  }, [currentPage, allJobs]);

  return (
    <div>
      <div className="job-list-and-details">
        <div className="job-list-window">
          {items.map((currentJob: Job, index: number) => (
            <JobCard
              jobObject={currentJob}
              onClick={() => {
                handleCardClick(currentJob);
              }}
            />
          ))}
        </div>
        <div className="job-active-details">
          <ActiveJob />
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
