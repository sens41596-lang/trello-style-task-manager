🗂️ Trello-Style Task Management Application

A Trello / Notion-like Task Management Web Application built using React and Tailwind CSS.
The application allows users to create, organize, and manage tasks across multiple boards with drag & drop, filters, and full CRUD functionality.

This project is developed as per the given assignment instructions.

📌 Problem Statement

Build a task management application similar to Trello / Notion Tasks where users can:

Create tasks

Categorize them into boards

Drag & drop tasks between boards

Filter and sort tasks

Persist data locally

The UI must be clean, responsive, and user-friendly.

🚀 Features Implemented
✅ Layout & UI

Three board columns:

To-Do

In-Progress

Completed

Card-based task design

Responsive layout (desktop & mobile)

Centered Trello-style boards with horizontal scrolling

Top navigation bar with Add Task button

✅ Task Management (CRUD)

Create Task

Title

Description

Priority (Low / Medium / High)

Status (Board)

Due Date (optional)

Read Tasks

Loaded from tasks.json initially

Persisted using localStorage

Update Task

Click a card to edit any field

Delete Task

Delete with confirmation prompt

✅ Drag & Drop

Drag tasks between:

To-Do → In-Progress → Completed

Status updates instantly on drop

Smooth interaction using react-beautiful-dnd

✅ Filtering & Sorting

Filter tasks by:

Priority

Status

Sort tasks by:

Newest first

Oldest first

🛠️ Technologies Used

React (Functional Components & Hooks)

Tailwind CSS

react-beautiful-dnd

localStorage (Data persistence)

Create React App

Only technologies allowed in the assignment are used.
⚙️ Setup Instructions (Windows CMD / PowerShell)
1️⃣ Clone the Repository
git clone https://github.com/sens41596-lang/trello-style-task-manager.git
cd trello-style-task-manager

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm start


📍 Application runs at:

http://localhost:3000

💾 Data Handling

Initial tasks are loaded from public/tasks.json

All updates (create, edit, delete, drag & drop) are saved to localStorage

Data persists across browser refresh

🧪 CRUD Operations Summary
Operation	Description
Create	Add a new task via modal
Read	Load tasks from JSON / localStorage
Update	Edit tasks by clicking on cards
Delete	Delete tasks with confirmation
🎯 Evaluation Criteria Mapping
Requirement	Status
UI / UX Quality	✅ Implemented
Component Structure	✅ Clean & modular
CRUD Operations	✅ Completed
Drag & Drop	✅ Implemented
Filtering & Sorting	✅ Implemented
localStorage Persistence	✅ Implemented
Responsive Design	✅ Implemented
🚀 Possible Enhancements

Dark mode

Search functionality

Backend integration

User authentication

Task labels & comments

👤 Author

Sandeep Sen
B.Tech Computer Science Engineering
Aspiring Frontend / MERN Stack Developer

GitHub: https://github.com/sens41596-lang

📄 License

This project is created for learning and assignment submission purposes.
