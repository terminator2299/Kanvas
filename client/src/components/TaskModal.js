import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../store/tasksSlice';

const TaskModal = ({ task, onClose }) => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = React.useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(editedTask));
    onClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={editedTask.priority}
              onChange={(e) =>
                setEditedTask({ ...editedTask, priority: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <div className="space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal; 