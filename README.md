# Planify - Modern Kanban Board Application

A modern, responsive Kanban board application built with React, Redux, and Tailwind CSS. Planify helps you organize, prioritize, and track your tasks with a beautiful, intuitive interface.

![Planify Logo](client/public/logo512.png)

## Features

- 🏠 **Stunning Home Page** with animated, typewriter-effect tagline and a modern blue calendar logo
- 🌙 **Dark Mode** toggle for a comfortable experience day or night
- 📱 **Fully Responsive** — looks great on phones, tablets, and desktops
- 🔐 **User Authentication** (Login/Register)
- 📝 **Task Management**: create, edit, delete tasks
- ⏰ **Deadlines**: set due dates and see overdue tasks
- 🏷️ **Labels**: categorize tasks (Bug, Feature, Urgent, etc.)
- 🔍 **Search & Filter**: quickly find and filter tasks
- 🎨 **Modern UI**: animated gradients, smooth transitions, and accessible design
- ❓ **How to Use**: in-app guide for new users

## Tech Stack

- **Frontend:**
  - React.js
  - Redux Toolkit
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (coming soon)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/terminator2299/Kanvas.git
   cd Kanvas
   ```
2. Install dependencies for both client and server:
   ```bash
   # Client
   cd client
   npm install
   # Server
   cd ../server
   npm install
   ```
3. Start the development servers:
   ```bash
   # Client (from client directory)
   npm start
   # Server (from server directory)
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
Planify/
├── client/                 # Frontend React application
│   ├── public/            # Static files (logo, index.html)
│   ├── src/              # Source files
│   │   ├── components/   # React components (Home, Board, Login, Register, etc.)
│   │   ├── store/        # Redux store and slices
│   │   └── ...
│   └── ...
└── server/                # Backend Node.js application
    ├── routes/           # API routes
    ├── models/           # Database models
    └── ...
```

## How to Use

### 1. Home Page
- See a beautiful animated tagline and the Planify logo.
- Use the **Get Started** button (top right) to go to Login.
- Click **How to Use** for a quick guide to all features.

### 2. Authentication
- **Login** or **Register** to access your personal Kanban board.

### 3. Main Features
- **Create a Task:** Click "+ Add Task" in any column. Enter title, description, priority, and assign to a column.
- **Set a Deadline:** Use the "Due Date" field when creating/editing a task. Overdue tasks are highlighted.
- **Add Labels:** Categorize tasks (Bug, Feature, Urgent, etc.) when editing.
- **Edit/Delete Tasks:** Click a task to open details and update or delete it.
- **Search & Filter:** Use the search bar and priority filter to quickly find tasks.
- **Dark Mode:** Use the toggle button (top right) to switch between light and dark themes.

## Contributing
Contributions are welcome! Please submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by [Trello](https://trello.com)
- Built with [Create React App](https://create-react-app.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## Contact
Bhavya Khandelwal - [@terminator2299](https://github.com/terminator2299)

Project Link: [https://github.com/terminator2299/Kanvas](https://github.com/terminator2299/Kanvas)
