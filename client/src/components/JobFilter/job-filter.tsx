import './job-filter.scss';

import React, { FormEvent, useState } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSalary } from '../../redux/jobFilters.slice';
const JobFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortByDate, setSortByDate] = useState<boolean>(false);

  const salary = useSelector((state: RootState) => state.jobFilters.salary);
  const datePosted = useSelector((state: RootState) => state.jobFilters.datePosted);
  const workType = useSelector((state: RootState) => state.jobFilters.workType);
  const dispatch = useDispatch();



  // Handle salary slider change
  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSalary(Number(event.target.value)));
  };

  // Handle date created sort toggle
  const toggleSortByDate = () => {
    setSortByDate(!sortByDate);
  };
   const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`The name you entered was: ${searchQuery}`)
  }

  return (
    <div>
    <div className="search-container">
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
      </div>

      <div className="filters">
        <div className="sort-by-date">
          <button onClick={toggleSortByDate}>
            {sortByDate ? 'Sort by Date (Descending)' : 'Sort by Date (Ascending)'}
          </button>
        </div>

        <div className="salary-slider">
          <label htmlFor="salary">Salary: ${salary}</label>
          <input
            type="range"
            id="salary"
            min="30000"
            max="150000"
            step="5000"
            value={salary}
            onChange={handleSalaryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
