import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskModal from './TaskModal';

const Task = ({ id, title, description, priority, dueDate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const priorityColors = {
    high: 'bg-red-100 border-red-500',
    medium: 'bg-yellow-100 border-yellow-500',
    low: 'bg-green-100 border-green-500',
  };

  // Check if task is overdue
  const isOverdue = dueDate && new Date(dueDate) < new Date().setHours(0, 0, 0, 0);
  
  // Format due date for display
  const formatDueDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
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
            } cursor-pointer ${isOverdue ? 'ring-2 ring-red-300' : ''}`}
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
              {dueDate && dueDate.trim() !== '' && (
                <div className="flex items-center space-x-1">
                  <span className={`text-xs ${
                    isOverdue ? 'text-red-600 font-semibold' : 'text-gray-600'
                  }`}>
                    📅 {formatDueDate(dueDate)}
                  </span>
                  {isOverdue && (
                    <span className="text-xs bg-red-100 text-red-800 px-1 rounded">
                      Overdue
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Draggable>
      {isModalOpen && (
        <TaskModal
          task={{ id, title, description, priority, dueDate }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Task; 