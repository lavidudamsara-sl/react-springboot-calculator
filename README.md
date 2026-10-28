# React + Spring Boot Calculator

A simple calculator built with a React frontend and a Java Spring Boot backend.

React collects two numbers and an operation. The backend calculates the result and returns it to React.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Division-by-zero error handling
- Support for decimal numbers

## Technologies

- React
- Vite
- Java 21
- Spring Boot
- Maven

## Project Structure

- `backend/` — Java Spring Boot API
- `frontend/` — React user interface

## Requirements

- Java JDK 21
- A Node.js version supported by Vite
- npm

Maven is provided through the project's Maven wrapper.

## Run the Project on Windows

Run the following commands from the cloned repository folder.

### 1. Start the Backend

```cmd
cd backend
.\mvnw.cmd spring-boot:run
```

The backend runs at http://localhost:8080.

### 2. Start the Frontend

Open a second terminal in the repository folder:

```cmd
cd frontend
npm install
npm run dev -- --port 5173 --strictPort
```

Open http://localhost:5173 in your browser.

Keep both terminals running.

## How to Use

1. Enter the first number.
2. Select an operation.
3. Enter the second number.
4. Click Calculate.
5. View the answer.

## API Example

Request:

```text
GET http://localhost:8080/api/calculate?a=5&b=3&operation=add
```

Response:

```json
{"result":8.0}
```

Supported operation values:

- `add`
- `subtract`
- `multiply`
- `divide`

## Learning Purpose

This project demonstrates how a React frontend communicates with a Spring Boot REST API.

Calculations are performed in Java. React sends the inputs and displays the returned result.

## Author

Lavidu
