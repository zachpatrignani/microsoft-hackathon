import "./JobBoard.scss";
import JobFilter from "../components/JobFilter/job-filter";
import JobListContainer from "../components/JobList/JobListContainer";

function JobBoard() {
  return (
    <div className="jobBoard">
        <JobFilter />
        <JobListContainer />
    </div>

  );
}

export default JobBoard;
