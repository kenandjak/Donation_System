<p align="center">
    <img alt="logo" src="assets/donate.png" align="center" width="100">
</p>
<h1 align="center">Happy Childhood</h1>
<p align="center"> This is an implementation of a system that seeks to facilitate donations for needy children, so that people from other regions can make donations.</p>
<p align="center">
    <img alt="Dashboard page" src="assets/donation_dashboard.png" width="500">
</p>

## 💡 Objective

<p>The goal of the project was to practice backend and frontend technologies and their integration.</p>
<p>In the backend, the concepts of routing and database connection were practiced.</br>
In the frontend, knowledge of styling and the use of components was improved.</p>

## 🚀 Technologies

<table>
  <tr>
    <td valign="top" width="30%">
      <h3>Backend:</h3>
      <ul>
        <li><img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=plastic" alt="Node.js"></li>
        <li><img src="https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=plastic" alt="Express.js"></li>
        <li><img src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=plastic" alt="MongoDB"></li>
        <li><img src="https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white&style=plastic" alt="Prisma"></li>
      </ul>
      <h3>Frontend:</h3>
      <ul>
        <li><img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic" alt="React"></li>
        <li><img src="https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwindcss&logoColor=white&style=plastic" alt="Tailwind"></li>
      </ul>
       <h3>Full Stack:</h3>
      <ul>
        <li><img src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=plastic" alt="Docker"></li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <img src="assets/donation_login.png" alt="Dashboard page" width="100%">
    </td>
  </tr>
</table>

## ⚙️ Running

- Clone the project:
  ```sh
  git clone https://github.com/kenandjak/Donation_System.git
  ```

### 🐋 Running with Docker

1. Create a .env file in the root directory and fill it with your credentials (use .env.example as a template):

   ```sh
   DATABASE_URL=your_mongodb_atlas_url

   JWT_SECRET=your_secret_key
   ```

2. Build and start the containers:
   ```sh
   docker compose up --build
   ```
3. Once the containers are up, the system will be available at:
<ul>
<li>Frontend: http://localhost:5173</li>
<li>Backend: http://localhost:3001</li>
</ul>

### 🛠️ Manual Development (without Docker)

1. Backend:
   ```sh
   cd backend
   ```
   ```sh
   npm install
   ```
   ```sh
   npx prisma generate
   ```
   ```sh
   node --watch server.js
   ```
2. Frontend:
   ```sh
   cd frontend
   ```
   ```sh
   npm install
   ```
   ```sh
   npm run dev
   ```

## ⚖️ License

This project is under the MIT license.
