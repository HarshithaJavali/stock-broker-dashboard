Stock Broker Client Dashboard

This project is a real-time stock broker client dashboard built to simulate how stock prices update live for multiple users.
Users can create an account, log in, subscribe to stocks, and see prices update automatically without refreshing the page.
The goal of this project was to understand real-time systems, multi-user behavior, and client–server communication.

What this application does
*Allows users to create an account and log in using email and password
*Lets users subscribe to supported stock symbols
*Updates stock prices every second in real time
*Supports multiple users at the same time
*Each user can subscribe to different stocks independently
*No page refresh is required to see updates

The dashboard currently supports the following stock symbols:
GOOG (Google)
TSLA (Tesla)
AMZN (Amazon)
META (Meta)
NVDA (NVIDIA)
Stock prices are generated using a random number generator for simulation purposes.

Tech Stack Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Real-Time Communication: Socket.IO
No database is used. User accounts are stored in memory for simplicity.

🚀 How to Run the Project (Local Setup)
Follow these steps to run the project on any system:
Install Node.js (LTS version)
Clone this repository
Open the project folder
Navigate to the server directory:cd server
Install dependencies:npm install
Start the server:npm start
Open your browser and go to:http://localhost:3000


