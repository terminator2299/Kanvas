import React from 'react';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { addTask } from '../store/tasksSlice';
import Task from './Task';

const Column = ({ title, id, tasks = [] }) => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({
      title: 'New Task',
      description: 'Add description here',
      priority: 'medium',
      columnId: id,
    }));
  };

  return (
    <div className="flex flex-col w-80 bg-gray-100 rounded-lg p-4" style={{ height: '600px' }}>
      <h2 className="font-semibold text-lg text-gray-700 mb-4">{title}</h2>
      <div className="flex-1 overflow-y-auto mb-4">
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[100px] rounded-lg ${snapshot.isDraggingOver ? 'bg-gray-200' : ''}`}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} {...task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <button
        className="p-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default Column; 