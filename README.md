# Agent UI - React Frontend for Conversational Agent

This project provides a React-based user interface for interacting with a local conversational AI agent. It features a microphone button to control listening, real-time transcription display, and displays the user's input and the AI's response.

## Features

* **Microphone Control:** Start and stop listening with a single button.
* **Real-time Transcription:** Displays the user's speech as it's being transcribed.
* **Conversation Display:** Shows the user's input and the AI's response.
* **Simple and User-Friendly Interface:** Designed for easy interaction.

## Prerequisites

* **Node.js and npm:** Ensure Node.js and npm are installed on your system. You can download them from [nodejs.org](https://nodejs.org/).
* **A running Flask API:** This UI is designed to work with the Flask API provided in the associated conversational agent project. Ensure that the API is running before starting the UI.

## Installation

1.  **Clone the Repository (Optional):**
    ```bash
    git clone <repository_url>
    cd agent-ui
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    npm install axios
    ```

## Usage

1.  **Start the Flask API:**
    * Ensure the Flask API is running on `http://127.0.0.1:5000`. Refer to the agent's project documentation for instructions.

2.  **Start the React App:**
    ```bash
    npm start
    ```
    * This will open the UI in your default web browser.

3.  **Interact with the Agent:**
    * Click the "Listen" button to start listening.
    * Speak into the microphone.
    * The transcription will be displayed in real-time.
    * Click the "Stop" button to stop listening and receive the AI's response.
    * The user's input and the AI's response will be displayed on the screen.

## Project Structure
```
agent-ui/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Main component for the UI
│   ├── index.js       # Entry point for the React app
│   └── ...
├── package.json     # Project dependencies and scripts
└── README.md
```
## Dependencies

* **React:** JavaScript library for building user interfaces.
* **Axios:** Promise-based HTTP client for making API requests.

## Configuration

* The UI communicates with the Flask API at `http://127.0.0.1:5000`. If your API is running on a different address or port, modify the API endpoints in `src/App.js`.

## Troubleshooting

* **API Connection Issues:**
    * Ensure the Flask API is running and accessible.
    * Check the API endpoints in `src/App.js`.
* **Browser Console Errors:**
    * Open the browser's developer console for error messages.
* **Microphone Issues:**
    * Ensure your microphone is properly connected and configured.
    * Grant microphone access to your browser.