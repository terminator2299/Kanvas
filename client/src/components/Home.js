import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const taglines = [
  'Plan. Track. Achieve.',
  'Organize your workflow.',
  'Collaborate with your team.',
  'Boost your productivity!',
];

const features = [
  {
    name: 'Task Management',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" /><rect width="20" height="14" x="2" y="5" rx="2" /></svg>
    ),
    description: 'Create, edit, and organize your tasks with ease. Stay on top of your work and deadlines.'
  },
  {
    name: 'Custom Labels',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 11h.01M7 15h.01M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2" /></svg>
    ),
    description: 'Categorize your tasks with custom labels for better organization and filtering.'
  },
  {
    name: 'Notifications',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" /></svg>
    ),
    description: 'Stay updated with real-time notifications for important events and deadlines.'
  },
];

export default function Home() {
  const [current, setCurrent] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  // Typewriter effect for animated tagline
  React.useEffect(() => {
    let timeout;
    if (displayed.length < taglines[current].length) {
      timeout = setTimeout(() => {
        setDisplayed(taglines[current].slice(0, displayed.length + 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setCurrent((prev) => (prev + 1) % taglines.length);
      }, 4000 - taglines[current].length * 40);
    }
    return () => clearTimeout(timeout);
  }, [displayed, current]);

  React.useEffect(() => {
    setDisplayed('');
  }, [current]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red via-blue-50 to-teal-50 transition-colors duration-500 overflow-hidden relative">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center sm:items-center justify-between px-3 sm:px-6 py-4 sm:py-6 gap-4 sm:gap-0 z-10">
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
        <div className="flex gap-2">
          <button
            onClick={() => { setLoginModalOpen(true); setRegisterModalOpen(false); }}
            className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all text-base"
          >
            Login
          </button>
          <button
            onClick={() => { setRegisterModalOpen(true); setLoginModalOpen(false); }}
            className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg hover:from-green-500 hover:via-green-600 hover:to-green-700 transition-all text-base"
          >
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2 w-full">
        {/* Animated Tagline at Top (with mobile slide-in/out effect) */}
        <div className="relative h-16 sm:h-24 flex items-center justify-center w-full mt-12 mb-16 overflow-x-hidden">
          <span
            className={
              `text-2xl sm:text-4xl md:text-5xl font-extrabold bg-animated-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center drop-shadow-lg px-2 sm:px-4 whitespace-pre ` +
              `mobile-animated-tagline`
            }
            key={current}
          >
            {displayed}
            <span className="inline-block w-2 h-7 align-middle bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse ml-1" style={{verticalAlign:'-0.2em'}}></span>
          </span>
        </div>
        {/* Features Responsive Boxes Section */}
        <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 mt-2 mb-20 overflow-x-visible sm:overflow-x-auto px-2 py-4 justify-center items-center">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className="w-full sm:min-w-[260px] sm:max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.name}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
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
      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            {/* Login Form (from Login.js, but without navigation) */}
            <LoginForm onSuccess={() => setLoginModalOpen(false)} onSwitch={() => { setLoginModalOpen(false); setRegisterModalOpen(true); }} />
          </div>
        </div>
      )}
      {/* Register Modal */}
      {registerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            {/* Register Form (from Register.js, but without navigation) */}
            <RegisterForm onSuccess={() => setRegisterModalOpen(false)} onSwitch={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }} />
          </div>
        </div>
      )}
      <footer className="w-full mt-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            © 2025 Planify. All Rights Reserved.
          </p>
          <a
            href="https://github.com/terminator2299"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Made with ❤️ by Bhavya
          </a>
        </div>
      </footer>
    </div>
  );
}

// Tailwind animation (add to global CSS if not present):
// @keyframes fade-in-out { 0%,100%{opacity:0} 10%,90%{opacity:1} }
// .animate-fade-in-out { animation: fade-in-out 2.5s ease-in-out; } 