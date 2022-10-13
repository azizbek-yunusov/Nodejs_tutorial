const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  // req - serverga sorov
  // res - serverdan javob
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "views", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "views", "contact.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/api/users") {
      res.writeHead(200, { "Content-type": "text/json" });
      const users = [
        { username: "azizbek07", email: "azizbekyunusov07@gmail.com" },
        { username: "shavkatmr", email: "shavkatmirziyoyev91@gmail.com" },
      ];
      res.end(JSON.stringify(users));
    }
  } else if (req.method === "POST") {
    const body = [];
    // console.log(body);
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });
    // console.log(Buffer);
    req.on("end", () => {
      const message = body.toString().split("=")[1];
      res.end(`<h1>Your message <u>${message}</u> </h1>`); // <b>${}</b>
    });
  }
});

server.listen(5000, () => {
  console.log("Server has been started on port 5000 http://localhost:5000");
});

// res.write("<p>hello Node JS</p>");
//     res.end(`
//         <div style="background: red">
//           <h1>Yunusov Azizbek</h1>
//         </div>
//     `);
