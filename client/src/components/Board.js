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

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Kanban Board</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto">
          {columns.map((column) => {
            const columnTasks = filteredTasks.filter(task => task.columnId === column.id);
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