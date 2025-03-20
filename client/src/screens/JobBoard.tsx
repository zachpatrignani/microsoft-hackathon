import "./JobBoard.scss";
import JobFilter from "../components/JobFilter/job-filter";
import JobListContainer from "../components/JobList/JobListContainer";

function JobBoard() {
  return (
    <div className="container">
      <div className="jobBoard">
        <h1>Job Board</h1>
        <a href="/add-job" className="add-job-link">+ Add Job</a>
        <JobFilter />
        <JobListContainer />
      </div>
    </div>
  );
}

export default JobBoard;
