# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Bot AI is a conversational interface designed to simulate a chatbot experience using dummy data for questions and answers. The application features two main routes: Home and Past Conversations.

How to Start the Service and Use the Application
Clone the Repository


git clone <repository-url>
cd bot-ai

Install Dependencies
npm install

Start the Application
npm start
The application will be available at http://localhost:3000.

Navigate the Application

Home: Here, users can ask questions and receive responses based on dummy data and in home page you will some random question to ask directly clicking on that question.

Past Conversations: This route displays a list of previous questions and answers.
Reasoning Behind Technical Choices

React: I chose React for its component-based architecture, allowing for reusable UI components and efficient rendering.

Routing: React Router was used to manage navigation between the Home and Past Conversations pages, providing a smooth user experience.

Dummy Data: The use of dummy data simplifies development and testing, allowing for a quick setup without the need for a backend API.

Reasoning Behind Design Choices
User-Friendly Interface: The design focuses on simplicity and ease of use, ensuring that users can easily navigate the application and interact with the chatbot.

Responsiveness: The application is designed to be responsive, providing a good user experience on both desktop and mobile devices.

Trade-offs and Future Improvements
Data Handling: The decision to use dummy data means that the application lacks real-time interaction. In a future version, integrating a backend service could enhance functionality by allowing dynamic conversations.

User Authentication: I did not implement user authentication for simplicity, but adding this feature could improve the user experience by allowing personalized interactions and saving past conversations.

Additional Features: If given more time, I would explore implementing more advanced chatbot functionalities, such as natural language processing or integration with an API to provide real responses.
