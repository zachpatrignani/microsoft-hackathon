import "./job-filter.scss";

import React, { FormEvent, useState, useRef } from "react";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setDatePosted,
  setSalary,
  setSearch,
  setIsAiSearch,
} from "../../redux/jobFilters.slice";
import FilterSelect from "../FilterSelect/filter-select";

const JobFilter = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openSalaryFilter, setOpenSalaryFilter] = useState<boolean>(false);
  const [openDateFilter, setOpenDateFilter] = useState<boolean>(false);
  const [aiSearchCheck, setAiSearchCheck] = useState<boolean>(false);
  const [selectedSalary, setSelectedSalary] = useState<string>("");
  const salaryButtonRef = useRef<HTMLButtonElement>(null);
  const datePostedRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const salaryOptions = [
    "$30000+",
    "$40000+",
    "$50000+",
    "$60000+",
    "$70000+",
    "$80000+",
    "$90000+",
    "$100000+",
  ];

  const parseSalary = (s: string) => {
    const parsedValue = parseInt(s?.replace(/[^\d.-]/g, ""), 10);
    return parsedValue;
  };

  const dateOptions = ["Any time", "Past month", "Past week", "Past 24 hours"];

  const dispatch = useDispatch();

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSalary(event.target.value);
  };

  const onSalaryApply = () => {
    dispatch(setSalary(parseSalary(selectedSalary)));
    setOpenSalaryFilter(false);
  };

  const onSalaryOpen = () => setOpenSalaryFilter(!openSalaryFilter);

  const onSalaryCancel = () => {
    setSelectedSalary("");
    setOpenSalaryFilter(false);
    dispatch(setSalary(undefined));
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const parseDate = () => {
    let currentDate = new Date();
    switch (selectedDate) {
      case "Any time":
        return new Date(0).toISOString(); // Returns UTC "1970-01-01T00:00:00.000Z"

      case "Past month":
        currentDate.setMonth(currentDate.getMonth() - 1);
        return currentDate.toISOString(); // Returns UTC time of 1 month ago

      case "Past week":
        currentDate.setDate(currentDate.getDate() - 7);
        return currentDate.toISOString(); // Returns UTC time of 7 days ago

      case "Past 24 hours":
        currentDate.setHours(currentDate.getHours() - 24);
        return currentDate.toISOString(); // Returns UTC time of 24 hours ago
    }
  };

  const onDateApply = () => {
    dispatch(setDatePosted(parseDate()));
    setOpenDateFilter(false);
  };

  const onDateOpen = () => setOpenDateFilter(!openDateFilter);

  const onDateCancel = () => {
    setSelectedDate("");
    setOpenDateFilter(false);
    dispatch(setDatePosted(undefined));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setSearch(searchQuery));
    dispatch(setIsAiSearch(aiSearchCheck));
    alert(
      `The name you entered was: ${searchQuery} and you are searching with a disability true/false ${aiSearchCheck}`,
    );
  };
  return (
    <div>
      <div className="filters">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              placeholder={aiSearchCheck ? "Prompt" : "Title/description"}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="ai-search-check">
          <label>
            <input
              type="checkbox"
              checked={aiSearchCheck}
              onChange={() => setAiSearchCheck(!aiSearchCheck)}
            />
            Use AI to generate compatible jobs
          </label>
        </div>
      </div>
      <div className="select-filters">
        <FilterSelect
          name="Salary"
          buttonRef={salaryButtonRef}
          isOpenFilter={openSalaryFilter}
          currentSelectedVal={selectedSalary}
          filterData={salaryOptions}
          onFilterApply={onSalaryApply}
          onFilterCancel={onSalaryCancel}
          onFilterOpen={onSalaryOpen}
          handleSelectionChange={handleSalaryChange}
        />
        <FilterSelect
          name="Date posted"
          buttonRef={datePostedRef}
          isOpenFilter={openDateFilter}
          currentSelectedVal={selectedDate}
          filterData={dateOptions}
          onFilterApply={onDateApply}
          onFilterCancel={onDateCancel}
          onFilterOpen={onDateOpen}
          handleSelectionChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default JobFilter;
