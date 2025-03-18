import "./filter-select.scss";

interface FilterSelectProps {
  name: string;
  buttonRef: any;
  onFilterOpen: () => void;
  isOpenFilter: boolean;
  filterData: Array<any>;
  currentSelectedVal: any;
  handleSelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterApply: () => void;
  onFilterCancel: () => void;
}
const FilterSelect = ({
  name,
  buttonRef,
  onFilterOpen,
  isOpenFilter,
  filterData,
  currentSelectedVal,
  handleSelectionChange,
  onFilterApply,
  onFilterCancel,
}: FilterSelectProps) => {
  return (
    <div className="filter">
      <button className="filter-btn" ref={buttonRef} onClick={onFilterOpen}>
        {name}
      </button>
      {isOpenFilter && (
        <div className="filter-list">
          <form>
            {filterData?.map((val, idx) => (
              <div key={`${idx}-${val}`}>
                <input
                  type="radio"
                  id={`${idx}-${val}`}
                  name="salary"
                  value={val}
                  checked={val === currentSelectedVal}
                  onChange={handleSelectionChange}
                />
                <label htmlFor={`${idx}-${val}`}> {val}</label>
              </div>
            ))}
          </form>
          <div className="filter-menu-btn">
            <button className="btn-filter-apply" onClick={onFilterApply}>
              Apply
            </button>
            <button className="btn-filter-cancel" onClick={onFilterCancel}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterSelect;
