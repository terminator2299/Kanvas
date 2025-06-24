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
          {/* Calendar SVG Logo */}
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="shrink-0">
            <rect x="4" y="8" width="40" height="32" rx="8" fill="url(#calendar-gradient)" />
            <rect x="4" y="16" width="40" height="24" rx="6" fill="#fff" fillOpacity="0.9" />
            <rect x="12" y="24" width="8" height="8" rx="2" fill="#6366F1" />
            <rect x="28" y="24" width="8" height="8" rx="2" fill="#a78bfa" />
            <rect x="12" y="34" width="8" height="4" rx="2" fill="#6366F1" fillOpacity="0.7" />
            <rect x="28" y="34" width="8" height="4" rx="2" fill="#a78bfa" fillOpacity="0.7" />
            <rect x="14" y="10" width="4" height="8" rx="2" fill="#6366F1" />
            <rect x="30" y="10" width="4" height="8" rx="2" fill="#a78bfa" />
            <defs>
              <linearGradient id="calendar-gradient" x1="4" y1="8" x2="44" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#A78BFA"/>
              </linearGradient>
            </defs>
          </svg>
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
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-8 max-w-lg w-full shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl sm:text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">How to Use Planify</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold mr-3">1</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Get Started</h3>
                  <p className="text-gray-600 dark:text-gray-300">Click the "Get Started" button on the top right of the home page to go to the login page.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold mr-3">2</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Register or Login</h3>
                  <p className="text-gray-600 dark:text-gray-300">If you are a new user, register for an account. Otherwise, log in with your credentials.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold mr-3">3</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Create a Task</h3>
                  <p className="text-gray-600 dark:text-gray-300">Once logged in, you'll see the task board. Click the "+ Add Task" button in any column to create a new task.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold mr-3">4</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Manage Your Tasks</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Use the following features to manage your tasks:</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mr-2"></span>
                      Set a due date to keep track of deadlines.
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mr-2"></span>
                      Add labels like "Bug" or "Feature" to categorize tasks.
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mr-2"></span>
                      Click on a task to edit its details or delete it.
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 mr-2"></span>
                      Use the search bar and priority filter to find tasks.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Tailwind animation (add to global CSS if not present):
// @keyframes fade-in-out { 0%,100%{opacity:0} 10%,90%{opacity:1} }
// .animate-fade-in-out { animation: fade-in-out 2.5s ease-in-out; } 