import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Column from './Column';
import SearchBar from './SearchBar';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = useSelector((state) => state.columns.columns);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="p-4 md:p-8">
      <button onClick={handleLogout} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold font-sans leading-[1.1] pb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Inter, Nunito, ui-sans-serif, system-ui, sans-serif' }}>
          Planify
        </h1>
        <p className="text-gray-600 text-lg font-medium">
          Plan. Track. Achieve.
        </p>
      </div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <div className="flex justify-center gap-16 xl:gap-24 2xl:gap-32 overflow-x-auto pb-8 px-2 md:px-8">
        {columns.map((column) => {
          const columnTasks = tasks
            .filter(task => task.columnId === column.id)
            .filter(task => {
              const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description.toLowerCase().includes(searchTerm.toLowerCase());
              const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
              return matchesSearch && matchesPriority;
            });
          return (
            <Column
              key={column.id}
              title={column.title}
              id={column.id}
              tasks={columnTasks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board; 