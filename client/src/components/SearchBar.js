import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, priorityFilter, setPriorityFilter }) => {
  return (
    <div className="mb-8">
      <div className="flex gap-4 items-center px-6 py-4 rounded-2xl shadow-card bg-white/60 backdrop-blur-md border border-border transition-all duration-300">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary bg-white/80 placeholder:text-muted text-base transition-all duration-200"
          />
        </div>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="p-2 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-primary bg-white/80 text-base transition-all duration-200"
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