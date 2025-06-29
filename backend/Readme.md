# Frontend Interview Task

With this file you will receive a backend server executable that provides a JSON-RPC endpoint for adding two numbers.
Your task is to create a frontend for this backend.
The frontend should have the following features:
* Input for both numbers
* Send both numbers to the backend in the format specified below
* Displaying the result value or errors returned from the backend

## Starting the backend server
You can start the backend server with the command line tool of your choice

Linux:
```
./backend-server
```

Windows:
```shell
.\backend-server.exe
```

The backend will print log messages to Stdout.

## Backend API

The backend serves a JSON RPC interface on port 9090. You can access this endpoint at http://localhost:9090/jrpc.

For getting the sum of two numbers from the server send a POST request with content type "application/json" and e.g. the following body

```json
{
  "jsonrpc": "2.0",
  "method": "add",
  "params": {
    "first": 13,
    "second": 42
  },
  "id": 31415
}
```

In params you provide the two input numbers and id can be chosen randomly.

If the two numbers are positive integers in the interval 1-100 you will get a JSON RPC Result with the sum of the two integers. Otherwise, you will get a JSON RPC error.

You can find additional information about JSON RPC [here](https://www.jsonrpc.org/specification).

## Submission

Create a webfrontend for the task described above. You can use any framework you like.

Please create a zip file of your solution and send it to us. Also provide us with information on how to run your solution.