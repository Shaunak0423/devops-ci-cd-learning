const { createClient } = require("redis");

const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/health") {
    res.end("Green-Blue Working no error?");
  }
}).listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});

async function startApp() {
  const client = createClient({
    url: "redis://redis:6379",
  });

  client.on("error", (err) => {
    console.error("Redis Error ❌", err);
  });

  await client.connect();
  console.log("Connected to Redis 🚀");

  await client.set("status", "Docker + Redis working!");
  const value = await client.get("status");

  console.log("Redis says:", value);
  console.log("Node app started");
}

startApp();