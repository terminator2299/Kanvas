import React, { useState } from 'react';
import TaskModal from './TaskModal';

const LABEL_COLORS = {
  Bug: 'bg-red-200 text-red-800',
  Feature: 'bg-blue-200 text-blue-800',
  Improvement: 'bg-yellow-200 text-yellow-800',
  Urgent: 'bg-pink-200 text-pink-800',
  Idea: 'bg-purple-200 text-purple-800',
  Research: 'bg-green-200 text-green-800',
  Personal: 'bg-gray-200 text-gray-800',
};

const Task = ({ id, title, description, priority, dueDate, labels = [], index }) => {
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
      <div
        className={`p-4 mb-3 rounded-lg border-l-4 ${
          priorityColors[priority] || 'bg-white border-gray-300'
        } shadow-sm cursor-pointer ${isOverdue ? 'ring-2 ring-red-300' : ''}`}
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className="font-medium text-gray-800">{title}</h3>
        {labels && labels.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 mb-1">
            {labels.map((label) => (
              <span
                key={label}
                className={`px-2 py-0.5 rounded text-xs font-semibold ${LABEL_COLORS[label] || 'bg-gray-200 text-gray-800'}`}
              >
                {label}
              </span>
            ))}
          </div>
        )}
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
      {isModalOpen && (
        <TaskModal
          task={{ id, title, description, priority, dueDate, labels }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Task; 