📝 TaskNest – Student Task Manager
1. Project Title & Goal

TaskNest – Student Task Manager is a web-based application that allows users to add, view, and manage their daily academic tasks through a clean neon-themed user interface with a simple backend for data handling.

2. Setup Instructions
Step 1: Clone the repository
git clone <your-repo-url>
cd Zimetrics-Task-2-Project

Step 2: Install backend dependencies
cd Backend
npm install

Step 3: Run the backend server
node server.js

Step 4: Open the frontend
Open the Frontend/index.html file in your browser

3. The Logic (How you thought)
Why did you choose this approach?
I chose a simple client-server architecture where the frontend handles user interaction and UI rendering, while the backend (Node.js with Express) manages task storage using a JSON file. This approach keeps the logic modular, easy to debug, and beginner-friendly while demonstrating full-stack development concepts.

What was the hardest bug you faced, and how did you fix it?
The hardest bug I encountered was a SyntaxError: Unexpected end of JSON input while reading the tasks.json file in the backend. This happened because the JSON file was either empty or not properly formatted. I fixed it by ensuring the file always contains a valid JSON array ([]) initially and by adding proper error handling while parsing the JSON data in the server code.

4. Output Screenshots

Screenshots are attached in Proof screshoot folder of my project
Home screen with neon UI
Create New Task card
Task list displayed side by side
Tasks added dynamically
