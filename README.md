# Planify - Modern Kanban Board Application

A modern, responsive Kanban board application built with React, Redux, and Tailwind CSS. This project provides a clean and intuitive interface for managing tasks and projects using the Kanban methodology.

![Planify Board](https://github.com/terminator2299/Kanvas/blob/main/client/public/logo512.png)

## Features

- 📋 Drag and drop task management
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔍 Search and filter tasks
- 📱 Mobile-friendly design
- 🎯 Priority-based task organization
- ✏️ Edit and delete tasks
- 🔄 Real-time updates with Redux

## Tech Stack

- **Frontend:**
  - React.js
  - Redux Toolkit for state management
  - Tailwind CSS for styling
  - react-beautiful-dnd for drag and drop functionality

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
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start client (from client directory)
   npm start

   # Start server (from server directory)
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

```
Planify/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/              # Source files
│   │   ├── components/   # React components
│   │   ├── store/        # Redux store and slices
│   │   └── ...
│   └── ...
└── server/                # Backend Node.js application
    ├── routes/           # API routes
    ├── models/           # Database models
    └── ...
```

## Features in Detail

### Task Management
- Create, edit, and delete tasks
- Set task priorities (High, Medium, Low)
- Add detailed descriptions to tasks

### Search and Filter
- Search tasks by title or description
- Filter tasks by priority
- Real-time search results

### User Interface
- Clean and modern design
- Responsive layout for all devices
- Intuitive drag and drop interface
- Visual feedback for task status

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

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
- Drag and drop powered by [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

## Contact

Bhavya Khandelwal - [@terminator2299](https://github.com/terminator2299)

Project Link: [https://github.com/terminator2299/Kanvas](https://github.com/terminator2299/Kanvas)
