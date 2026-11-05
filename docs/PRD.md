## Product Identity

**Product Name:** Taskly
**Tagline:** Plan less. Do more.

## Product Overview

Build a beginner-friendly, multi-user task manager using the MERN stack. The main goal is to learn full-stack development from project setup to deployment by building the application step by step.

## MVP Goal

Each registered user can securely manage their own personal tasks.

## Core Features

1. **Authentication:** Register, login and logout using email and password. Store passwords as bcrypt hashes and protect task APIs with JWT authentication.
2. **Create tasks:** Add a task with a required title and optional description.
3. **View tasks:** Display the logged-in user's tasks in one simple list.
4. **Update tasks:** Edit the title or description and mark a task as complete or incomplete.
5. **Delete tasks:** Delete a task.
6. **Basic UI:** Clean, beginner-friendly and responsive screens for registration, login and task management.

## Task Data

- Title (required)
- Description (optional)
- Completed (boolean; defaults to false)
- User ID (owner)
- Created and updated timestamps

## Technology Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** bcrypt / bcryptjs + JWT
- **Development tools:** npm, Git + GitHub, Postman
- **Deployment:** Deploy the React frontend and Express backend, connect a hosted MongoDB database, and configure production environment variables.

## Out of Scope for Version 1

Kanban board, priorities, due dates, reminders, tags, advanced search and filters, Google sign-in, profile management, team collaboration and notifications.

## Acceptance Criteria

- A user can register, log in and log out.
- A logged-in user can create, view, edit, complete and delete tasks.
- Users can only access and modify their own tasks.
- Tasks remain saved after refreshing the page.
- Invalid inputs and API errors show understandable feedback.
- The application is deployed and usable through a public URL.

## Learning & Build Sequence

1. Install tools and create the React and Express projects.
2. Build the Express server and connect MongoDB.
3. Create and test authentication APIs.
4. Build task CRUD APIs and protect them by user ownership.
5. Build the React screens and connect them to the APIs.
6. Test the complete flow, fix issues and deploy frontend + backend.

**Version:** 1.0 — Beginner MVP