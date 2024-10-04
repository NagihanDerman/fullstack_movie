# Movie Website

This project is a fullstack movie website application built using Node.js and React Vite. Users can view, search, and delete movies. The project uses React for the frontend and Node.js for the backend.
A fullstack project with an API and frontend that includes functionalities to list, filter, delete, and create movie data.

## Technologies Used

### Frontend

- React: A popular library for building user interfaces. In this project, it is used to create components for the movie list, movie details, and search functionality.

- Tailwind CSS: A utility-first CSS framework used for quick and flexible styling throughout the project.

- React Router Dom: A routing library used for handling page navigation. It manages redirections to movie detail pages and search results.

- React Icons: This library is used to add icons to the project.

- Axios: A library for making HTTP requests to communicate with the backend. It handles fetching the movie list, searching for movies, and deleting movies.

- @tanstack/react-query: This is used for API requests and caching data. It helps improve the user experience by caching data, reducing unnecessary re-fetching.

- React Toastify: A library used to display notifications to users. For example, when a movie is deleted or an error occurs, it shows alerts to the user.

### Backend

- Node.js: Node.js is a JavaScript runtime used for server-side applications. In this project, it provides a simple RESTful API that delivers movie data.

- Nodemon: A tool used during development to automatically restart the server when changes are made. This saves time by not requiring a manual restart every time.

## Backend API Endpoints

- GET `/api/movies`: Returns all movies
- GET `/api/movies/ID`: Returns a specific movie by ID
- GET `/api/movies?query=TEXT`: Filters movies based on a query
- DELETE `/api/movies/ID`: Deletes a specific movie by ID
