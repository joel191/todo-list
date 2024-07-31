# Todo List Application

This is a simple Todo List application built using React. It allows users to create, update, delete, and search tasks. The application demonstrates the use of React hooks, React Router for URL management, and basic state management.

## Overview of the System Design

The Todo List Application is designed with the following components:

1. **TaskList Component**: 
   - Manages the list of tasks and the search functionality.
   - Uses URL parameters to handle search queries.
   - Renders the `TaskForm` component for adding new tasks and the `Task` component for each task in the list.

2. **TaskForm Component**:
   - Provides a form for adding new tasks.
   - Collects task title and description from the user.

3. **Task Component**:
   - Displays individual tasks with options to edit, delete, and mark them as completed.
   - Allows users to expand tasks to view additional details, such as the task description and timestamp.

### Key Features

- **Create Task**: Users can add new tasks with a title and description.
- **Update Task**: Users can edit the details of existing tasks.
- **Delete Task**: Users can remove tasks from the list.
- **Mark as Done**: Users can mark tasks as completed.
- **Search Tasks**: Users can search for tasks using a search bar. The search query is reflected in the URL.
- **Expandable List**: Tasks can be expanded to show additional details, including a description and the last updated timestamp.

### Data Storage

- The application uses a dummy JSON file (`tasks.json`) to simulate a data repository. In a real-world scenario, this could be replaced with a backend API or a database for persistent storage.

### Framework

- The application is built using React, a popular JavaScript library for building user interfaces.

## Implementation Explanation

The implementation involves several key parts:

- **React Hooks**: The application uses hooks like `useState`, `useEffect`, `useLocation`, and `useNavigate` to manage state and lifecycle events.

- **React Router**: The `react-router-dom` library is used for navigation and URL parameter management. The `useNavigate` hook is used to programmatically update the URL when the search term changes.

- **Component-Based Architecture**: The application is broken down into reusable components (`TaskList`, `TaskForm`, `Task`), each responsible for a specific piece of functionality.

- **State Management**: The application uses React's `useState` hook to manage the state of tasks and the search term.

- **Modular Code**: The code is organized into separate components and files, making it easy to maintain and extend.

## Setup and Run Instructions

To set up and run the application, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine. The application requires Node.js for running the development server.

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/joel191/todo-list.git

2. **Navigate to the Project Directory**
   ```bash
   cd todo-list-application

4. **install Dependencies**
   ```bash
   npm install

### Running The APplication 

1. **Start the Development Server**
## Run the following command to start the development server:
```bash
npm start

2. **Access the Application**
Open your web browser and navigate to http://localhost:3000 to access the Todo List application.

## Additional Notes
Dummy Data: The application uses a dummy JSON file (tasks.json) for data storage. You can modify this file to test with different task data.

Future Enhancements: Consider adding user authentication, persistent storage with a backend, and more advanced filtering and sorting options for tasks.

