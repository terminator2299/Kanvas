import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import SearchBar from './SearchBar';
import { moveTask } from '../store/tasksSlice';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns.columns);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch(moveTask({
      taskId: draggableId,
      newColumnId: destination.droppableId,
    }));
  };

  return (
    <div className="p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          KANVAS
        </h1>
        <p className="text-gray-600 text-lg font-medium">
          Organize • Collaborate • Achieve
        </p>
      </div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <DragDropContext onDragEnd={onDragEnd}>
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
      </DragDropContext>
    </div>
  );
};

export default Board; 