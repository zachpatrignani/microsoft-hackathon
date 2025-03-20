import "./JobBoard.scss";
import JobFilter from "../components/JobFilter/job-filter";
import JobListContainer from "../components/JobList/JobListContainer";

function JobBoard() {
  return (
    <div className="jobBoard">
        <JobFilter />
        {/* <a href="/add-job" className="add-job-link">+ Add Job</a> */}
        <JobListContainer />
    </div>

  );
}

export default JobBoard;
