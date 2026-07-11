# 🌦️ AI Weather Assistant

An intelligent weather assistant built using **React**, **Node.js**, **LangChain**, and **OpenWeather API**. Unlike a traditional chatbot, this application uses an AI agent capable of selecting the appropriate tool based on the user's query, enabling both current weather retrieval and weather forecasting.

---

## Features

- 🌤️ Current weather information
- 📅 5-day weather forecast
- 🤖 AI-powered conversational interface
- 🧠 LangChain Agent with tool calling
- ⚡ Automatic tool selection based on user intent
- 💬 Chat interface built with React
- 📊 Interactive weather card displaying current conditions
- 🌍 Supports weather queries for cities worldwide

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- LangChain
- OpenRouter LLM
- OpenWeather API

---

## Project Architecture

```
                 React Frontend
                       │
                       ▼
               Express Backend API
                       │
                       ▼
               LangChain AI Agent
              ┌────────┴────────┐
              │                 │
      Current Weather Tool   Forecast Tool
              │                 │
      OpenWeather API     OpenWeather Forecast API
```

The AI agent automatically determines which tool to invoke depending on the user's request.

Examples:

- "Weather in Delhi" → Current Weather Tool
- "Humidity in Mumbai" → Current Weather Tool
- "Will it rain tomorrow?" → Forecast Tool
- "Weekend forecast for London" → Forecast Tool

---

## Folder Structure

```
weather_assistant/
│
├── client/
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/
│   ├── agents/
│   ├── config/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   ├── tools/
│   └── ...
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/agent-project.git

cd agent-project
```

---

### Backend Setup

```bash
cd server

npm install
```

Create a `.env` file:

```env
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_KEY

OPENROUTER_API_KEY=YOUR_OPENROUTER_KEY

MODEL=qwen/qwen3-235b-a22b

MAX_TOKENS=500

PORT=5000
```

Start the backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

The frontend runs on

```
http://localhost:5173
```

The backend runs on

```
http://localhost:5000
```

---

## AI Agent Workflow

```
User Question
      │
      ▼
LangChain Agent
      │
      ├──────────────┐
      │              │
Current Weather   Forecast Tool
      │              │
      ▼              ▼
OpenWeather     Forecast API
      │              │
      └──────┬───────┘
             ▼
      Natural Language Response
```

---

## Example Questions

- Weather in Bengaluru
- Temperature in Delhi
- Humidity in Mumbai
- Is it windy in Chennai?
- Will it rain tomorrow in London?
- Weekend forecast for Paris
- Will it snow in Switzerland?

---

## Future Improvements

- Air Quality Index (AQI)
- UV Index
- Weather Alerts
- Geolocation support
- Weather history
- Hourly forecast visualization
- Voice interaction
- Weather maps

---

## Screenshots

<img width="752" height="780" alt="image" src="https://github.com/user-attachments/assets/e264a915-620c-489f-948e-81b7ed1aa04b" />

---

## License

MIT License
