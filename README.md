# Number Adder Frontend

## Description

A React-based frontend application built with Vite and TypeScript. It sends a JSON-RPC Request object to a backend Server. The Request object contains, as params, two numbers between 1-100. The backend Server adds both numbers with the Response object containing the result, if successful, or an Error object. For demonstration purposes, the frontend input verification of the two numbers can be turned off in order to trigger the backend sided error response.

## Requirements

- Node.js (v16 or higher)
- Backend running on `http://localhost:9090/jrpc`

## Installation and Setup

1. (Clone repository)

```bash
   git clone https://github.com/matfroeh/number-adder.git
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. Start the backend:

```bash
cd ../backend
./backend-server # Linux
./backend-server.exe  # Windows
```
