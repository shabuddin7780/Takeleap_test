// Import the 'http' module
const http = require("http");

// I created the HTTP server here
const server = http.createServer((req, res) => {
  //And Set the response header to indicate JSON content
  res.writeHead(200, { "Content-Type": "application/json" });

  // I Defined the JSON object to respond with
  const response = {
    message: "Welcome to Node.js HTTP Server!",
    timestamp: new Date().toISOString(),
  };

  // Send the JSON response here
  res.end(JSON.stringify(response));
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
