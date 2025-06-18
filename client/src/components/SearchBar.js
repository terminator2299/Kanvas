import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, priorityFilter, setPriorityFilter }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar; 