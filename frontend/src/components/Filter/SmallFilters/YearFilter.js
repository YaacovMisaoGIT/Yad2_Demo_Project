const YearFilter = ({ handleYearSelect }) => {
  const generateYearOptions = (startYear, endYear) => {
    const options = [];
    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  const currentYear = new Date().getFullYear();
  const years = generateYearOptions(2000, currentYear);

  const handleYearFilterSelect = (e) => {
    handleYearSelect(e.target.name, e.target.value);
  };

  return (
    <div className="filter-item">
      <label>Year Range:</label>
      <div>
        <select name="fromYear" onChange={handleYearFilterSelect} defaultValue="">
          <option value="">From</option>
          {years}
        </select>
        <select name="untilYear" onChange={handleYearFilterSelect} defaultValue="">
          <option value="">Until</option>
          {years}
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
