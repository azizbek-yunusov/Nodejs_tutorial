
// FS - file system
const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "modules"), (err) => {
//   if(err) throw err;
//   console.log("ok");

//   fs.writeFile(
//     path.join(__dirname, "modules", "path.js"),
//     "//path module",
//     (err) => {
//       if(err) throw err;
//       console.log("file was created succesfully");
//     }
//   );
// })

// fs.writeFile(
//   path.join(__dirname, "modules", "nodejs.txt"),
//   "Node Js tutorial",
//   (err) => {
//     if(err) throw err;
//     console.log("document was created succesfully");
//     fs.appendFile(
//       path.join(__dirname, "modules", "nodejs.txt"),
//       "by Azizbek Yunusov",
//       (err) => {
//         if(err) throw err;
//         console.log("document changed");
//       }
//     )
//   }
// );

// fs.readFile(
//   path.join(__dirname, "modules", "nodejs.txt"),
//   (err, data) => {
//     if(err) throw err;
//     console.log(data);
//   }
// )

// fs.readFile(
//   path.join(__dirname, "modules", "nodejs.txt"), 
//   (err, data) => {
//     if(err) throw err;
//     console.log(Buffer.from(data).toString());
//   }
// )

fs.rename(
  path.join(__dirname, "modules", "nodejs.txt"),
  path.join(__dirname, "modules", "node.txt"),
  (err) => {
    if(err) throw err;
    console.log("changed file name");
  }
)