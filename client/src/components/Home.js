import React from 'react';
import { Link } from 'react-router-dom';

const taglines = [
  'Plan. Track. Achieve.',
  'Organize your workflow.',
  'Collaborate with your team.',
  'Boost your productivity!',
];

export default function Home() {
  const [current, setCurrent] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [displayed, setDisplayed] = React.useState('');

  // Typewriter effect
  React.useEffect(() => {
    let timeout;
    if (displayed.length < taglines[current].length) {
      timeout = setTimeout(() => {
        setDisplayed(taglines[current].slice(0, displayed.length + 1));
      }, 40); // typing speed
    } else {
      // Wait until the next tagline
      timeout = setTimeout(() => {
        setDisplayed('');
        setCurrent((prev) => (prev + 1) % taglines.length);
      }, 4000 - taglines[current].length * 40); // 4s minus typing time
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [displayed, current]);

  React.useEffect(() => {
    setDisplayed('');
  }, [current]);

  return (
<div className="min-h-screen flex flex-col bg-violet-200 dark:bg-gradient-to-br dark:from-[#0a0c10] dark:via-[#141926] dark:to-[#1f2a38] transition-colors duration-500">
{/* Header */}
      <header className="flex flex-col sm:flex-row items-center sm:items-center justify-between px-3 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg tracking-wide" style={{ fontFamily: 'Inter, Nunito, ui-sans-serif, system-ui, sans-serif' }}>Planify</span>
          <button
            onClick={() => setShowModal(true)}
            className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            How to Use
          </button>
        </div>
        <Link to="/login" className="w-full sm:w-auto flex justify-end">
          <button className="px-4 sm:px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all text-base sm:text-lg w-full sm:w-auto">Get Started</button>
        </Link>
      </header>
      {/* Centered Tagline */}
      <main className="flex-1 flex flex-col items-center justify-center px-2">
        <div className="relative h-16 sm:h-24 flex items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold animate-slide-fade-in-out bg-animated-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center drop-shadow-lg px-2 sm:px-4 whitespace-pre" key={current}>
            {displayed}
            <span className="inline-block w-2 h-7 align-middle bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse ml-1" style={{verticalAlign:'-0.2em'}}></span>
          </span>
        </div>
      </main>
      {/* How to Use Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
          <div className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-8 max-w-lg w-full shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl sm:text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-primary dark:text-dark-primary">How to Use Planify</h2>
            <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-200 text-base sm:text-lg">
              <li>
                <span className="font-semibold">Create a Task:</span> Click "+ Add Task" in any column. Enter the task title, description, priority, and assign it to a column.
              </li>
              <li>
                <span className="font-semibold">Set a Deadline:</span> When creating or editing a task, use the "Due Date" field to set a deadline. Overdue tasks will be highlighted.
              </li>
              <li>
                <span className="font-semibold">Add Labels:</span> Click on labels when editing a task to categorize it (e.g., Bug, Feature, Urgent, etc.).
              </li>
              <li>
                <span className="font-semibold">Edit or Delete Tasks:</span> Click on a task to open its details. You can update information or delete the task from here.
              </li>
              <li>
                <span className="font-semibold">Move Tasks:</span> (If enabled) Drag and drop tasks between columns to update their status.
              </li>
              <li>
                <span className="font-semibold">Search & Filter:</span> Use the search bar and priority filter to quickly find tasks.
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

// Tailwind animation (add to global CSS if not present):
// @keyframes fade-in-out { 0%,100%{opacity:0} 10%,90%{opacity:1} }
// .animate-fade-in-out { animation: fade-in-out 2.5s ease-in-out; } 