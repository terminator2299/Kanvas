import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskModal from './TaskModal';

const Task = ({ id, title, description, priority, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const priorityColors = {
    high: 'bg-red-100 border-red-500',
    medium: 'bg-yellow-100 border-yellow-500',
    low: 'bg-green-100 border-green-500',
  };

  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`p-4 mb-3 rounded-lg border-l-4 ${
              priorityColors[priority] || 'bg-white border-gray-300'
            } shadow-sm ${
              snapshot.isDragging ? 'shadow-lg' : ''
            } cursor-pointer`}
            onClick={() => setIsModalOpen(true)}
          >
            <h3 className="font-medium text-gray-800">{title}</h3>
            {description && (
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            )}
            <div className="mt-3 flex justify-between items-center">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  priority === 'high'
                    ? 'bg-red-200 text-red-800'
                    : priority === 'medium'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-green-200 text-green-800'
                }`}
              >
                {priority}
              </span>
            </div>
          </div>
        )}
      </Draggable>
      {isModalOpen && (
        <TaskModal
          task={{ id, title, description, priority }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Task; 