# 🌦️ AI Weather Assistant

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![LangChain](https://img.shields.io/badge/LangChain-Agent-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

An AI-powered Weather Assistant built using **React**, **Node.js**, **Express**, **LangChain**, and the **OpenWeather API**. The application leverages a LangChain Agent capable of automatically selecting the appropriate tool based on user intent, enabling intelligent conversations about both **current weather** and **weather forecasts**.

Live Demo - https://agent-project-vert.vercel.app/

---

## ✨ Features

- 🌤️ Real-time weather information
- 📅 5-day weather forecast
- 🤖 AI-powered conversational interface
- 🧠 LangChain Agent with intelligent tool selection
- ⚡ Automatic routing between Current Weather and Forecast tools
- 💬 Modern React chat interface
- 📊 Dynamic weather card for current conditions
- 🌍 Worldwide city support
- 🔄 Markdown-supported AI responses

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
   
### Backend
- Node.js
- Express.js
- LangChain
- OpenRouter (LLM)
- OpenWeather API

---

# 🏗️ Project Architecture

```text
                    React Frontend
                          │
                          ▼
                  Express Backend API
                          │
                          ▼
                  LangChain AI Agent
                 ┌─────────┴─────────┐
                 │                   │
      Current Weather Tool     Forecast Tool
                 │                   │
                 ▼                   ▼
       OpenWeather Current API   OpenWeather Forecast API
```

The AI Agent automatically determines which tool to invoke depending on the user's request.

### Examples

| User Query | Tool Selected |
|------------|---------------|
| Weather in Delhi | Current Weather |
| Humidity in Mumbai | Current Weather |
| Temperature in Bengaluru | Current Weather |
| Will it rain tomorrow? | Forecast |
| Weekend forecast for London | Forecast |
| Snowfall in Switzerland next week | Forecast |

---

# 📁 Folder Structure

```text
weather_assistant/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── ...
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

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/MananJain-dev/agent-project.git

cd agent-project
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file inside the `server` directory.

```env
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY

OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY

MODEL=qwen/qwen3-235b-a22b

MAX_TOKENS=500

PORT=5000
```

Start the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

The application will be available at:

Frontend

```text
http://localhost:5173
```

Backend

```text
http://localhost:5000
```

---

# 🤖 AI Agent Workflow

```text
              User Query
                   │
                   ▼
          LangChain Agent
                   │
      ┌────────────┴────────────┐
      │                         │
Current Weather Tool      Forecast Tool
      │                         │
      ▼                         ▼
Current Weather API      Forecast API
      │                         │
      └────────────┬────────────┘
                   ▼
      Natural Language Response
```

The agent reasons about the user's intent and invokes the appropriate tool automatically.

---

# 💬 Example Queries

- Weather in Bengaluru
- Temperature in Delhi
- Humidity in Mumbai
- Is it windy in Chennai?
- Weather in New York
- Forecast for London
- Weekend weather in Paris
- Will it rain tomorrow in Delhi?
- Will it snow in Switzerland?

---

# 📸 Screenshots

### Chat Interface

<img width="752" height="780" alt="AI Weather Assistant" src="https://github.com/user-attachments/assets/e264a915-620c-489f-948e-81b7ed1aa04b" />

---

# 🚀 Future Improvements

- 🌫️ Air Quality Index (AQI)
- ☀️ UV Index
- 🚨 Weather Alerts
- 📍 Geolocation Support
- 🗺️ Interactive Weather Maps
- 📈 Hourly Forecast Visualization
- 🎙️ Voice-based Interaction
- 📱 Mobile Responsive Enhancements

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are welcome.

If you'd like to improve the project, feel free to fork the repository, create a new branch, and submit a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

# 👨‍💻 Author

**Manan Jain**

- GitHub: https://github.com/MananJain-dev
- LinkedIn: www.linkedin.com/in/manan-jain-b163a6321
