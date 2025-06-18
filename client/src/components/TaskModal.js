import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../store/tasksSlice';

const LABEL_OPTIONS = [
  { name: 'Bug', color: 'bg-red-200 text-red-800' },
  { name: 'Feature', color: 'bg-blue-200 text-blue-800' },
  { name: 'Improvement', color: 'bg-yellow-200 text-yellow-800' },
  { name: 'Urgent', color: 'bg-pink-200 text-pink-800' },
  { name: 'Idea', color: 'bg-purple-200 text-purple-800' },
  { name: 'Research', color: 'bg-green-200 text-green-800' },
  { name: 'Personal', color: 'bg-gray-200 text-gray-800' },
];

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

  const toggleLabel = (label) => {
    setEditedTask((prev) => {
      const hasLabel = prev.labels?.includes(label);
      return {
        ...prev,
        labels: hasLabel
          ? prev.labels.filter((l) => l !== label)
          : [...(prev.labels || []), label],
      };
    });
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={editedTask.dueDate || ''}
              onChange={(e) =>
                setEditedTask({ ...editedTask, dueDate: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Labels
            </label>
            <div className="flex flex-wrap gap-2">
              {LABEL_OPTIONS.map((label) => {
                const isActive = editedTask.labels?.includes(label.name);
                return (
                  <button
                    type="button"
                    key={label.name}
                    onClick={() => toggleLabel(label.name)}
                    className={`px-2 py-1 rounded text-xs font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive
                        ? label.color + ' border-transparent shadow'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {label.name}
                  </button>
                );
              })}
            </div>
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