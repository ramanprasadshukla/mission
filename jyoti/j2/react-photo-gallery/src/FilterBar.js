import React from 'react';
import './FilterBar.css';

function FilterBar() {
  return (
    <div className="filter-bar-wrapper">
      <div className="filter-bar">
        <div>Total Gallery: 16</div>

        <div className="filter-item">
          <label htmlFor="year-select">Select Year: </label>
          <select id="year-select">
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="month-select">Select Month: </label>
          <select id="month-select">
            <option>All Month</option>
            <option>July</option>
            <option>June</option>
          </select>
        </div>

        <input type="text" placeholder="Enter Album Title or Description" />
      </div>
    </div>
  );
}

export default FilterBar;
