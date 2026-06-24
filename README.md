# LLM Tool-Calling Agent System

An AI-powered backend system that enables Large Language Models (LLMs) to dynamically invoke external tools, retrieve real-time information, and generate context-aware responses. The project demonstrates agentic workflows using LangChain, function calling, and API integrations.

---

## Overview

Traditional LLMs are limited to the information available within their training data. This project extends an LLM's capabilities by allowing it to:

* Understand user intent
* Decide when external information is required
* Select and invoke the appropriate tool
* Process tool outputs
* Generate a final natural-language response

The system currently supports weather retrieval and structured information lookup, while maintaining a modular architecture for adding new tools.

---

## Features

* Agentic decision-making using LangChain
* Dynamic tool invocation based on user queries
* Real-time weather information through OpenWeather API
* Function-calling workflow with Gemini models
* Input validation using Zod
* Modular design for adding additional tools
* REST API interface for external applications

---

## Architecture

```text
User Query
     │
     ▼
Express API Endpoint
     │
     ▼
LangChain Agent
     │
     ├── Direct Response
     │
     └── Tool Selection
             │
             ▼
       External Tool
             │
             ▼
       Tool Output
             │
             ▼
      Final Response
```

---

## Tech Stack

### Backend

* Node.js
* Express.js

### AI & Agent Framework

* LangChain
* Google Gemini API

### External Services

* OpenWeather API

### Validation & Utilities

* Zod
* dotenv

---

## Project Structure

```text
agent-project/
│
├── server.js          # Main Express server and agent workflow
├── weather.js         # LangGraph experimentation and weather workflows
├── package.json
├── .env
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MananJ-cyber/agent-project.git

cd agent-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
GOOGLE_API_KEY=your_google_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
```

### 4. Start the Server

```bash
node server.js
```

---

## Example Queries

### Weather Queries

```text
What is the weather in Jalandhar?
```

```text
Will it rain tomorrow in Delhi?
```

### Information Retrieval

```text
Get menu for Pasta Palace
```

```text
Tell me about available services
```

---

## Agent Workflow

1. User sends a query through the API.
2. Gemini interprets the request.
3. LangChain determines whether a tool call is required.
4. Appropriate tool executes.
5. Tool output is returned to the model.
6. Model generates the final response.

---

## Key Learnings

* Building agentic AI systems with LangChain
* Implementing tool-calling and function execution workflows
* Integrating real-time APIs with LLMs
* Managing agent execution loops and stopping criteria
* Designing modular AI-powered backend services

---

## Future Improvements

* Support for multiple dynamic tools
* Database integration for persistent memory
* Multi-step planning agents
* Frontend dashboard for interaction
* Docker containerization
* Cloud deployment (AWS/GCP/Azure)
* Authentication and rate limiting

---

## Author

**Manan Jain**

B.Tech, Computer Science Engineering
Indian Institute of Technology Jammu

GitHub: https://github.com/MananJ-cyber
LinkedIn: https://linkedin.com/in/manan-jain-b163a6321

```
```
