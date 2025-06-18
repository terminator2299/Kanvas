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
    <div className="flex flex-col w-80 bg-column rounded-2xl shadow-column p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl border border-border" style={{ height: '600px' }}>
      <h2 className="font-semibold text-xl text-primary mb-4 tracking-wide drop-shadow-sm">{title}</h2>
      <div className="flex-1 overflow-y-auto mb-4">
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[100px] rounded-lg transition-colors duration-200 ${snapshot.isDraggingOver ? 'bg-secondary/40' : ''}`}
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
        className="p-2 bg-primary text-white rounded-lg font-semibold shadow-card hover:bg-accent hover:scale-105 transition-all duration-200"
        onClick={handleAddTask}
      >
        + Add Task
      </button>
    </div>
  );
};

export default Column; 