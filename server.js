const express = require("express")
const multer = require("multer")
const sqlite3 = require("sqlite3").verbose();
const path = require("path")
const convert = require("xml-js")
const fs =require("fs")
// const disk = require("diskusage");
const cors = require("cors")
const connectDb=require("./db")
const dotenv = require("dotenv")
const authRouter = require("./Routes/UserRoute")
const historyRoute = require("./Routes/HistoryRouter"
)
dotenv.config({ path: "./config/config.env" });
connectDb();
const app = express();
app.use(cors())
app.use(express.json())
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/filesUpload", upload.single("xmlfile"), (req, res) => {

  let pathOfFile = req.file.destination + req.file.originalname;
 
  const dotIndex = pathOfFile.lastIndexOf(".");
  const fileExtension = pathOfFile.substring(dotIndex + 1);
  if (fileExtension === "db") {
    let dbFileData = {};
    console.log('db file inside')
     const db = new sqlite3.Database(
       pathOfFile,
       sqlite3.OPEN_READONLY,
       (err) => {
         if (err) {
           console.error(err.message);
           return;
         }
         console.log("Connected to the database.");
       }
    );
    db.all(
      "SELECT * FROM _objects_",
      [],
      (err, rows) => {
        if (err) {
          console.error(err.message);
          return;
        }
        // Process the rows
        let totalCountOfObjects = {}
        let totalObjects=0
        rows.forEach((row) => {
          if (row._object_type_ in totalCountOfObjects) {
            totalCountOfObjects[row._object_type_] =
              totalCountOfObjects[row._object_type_] + 1;
            totalObjects=totalObjects+1
          } else {
            totalCountOfObjects[row._object_type_] = 1;
             totalObjects = totalObjects + 1;
          }
        });
        // console.log(totalCountOfObjects);
        // const jsonString = JSON.stringify(totalCountOfObjects);
        dbFileData["totalCountOfObjects"] = totalCountOfObjects;
        dbFileData["totalObjects"] = totalObjects;
       
      }
    );
    db.all("SELECT * FROM _references_", [], (err, rows) => {
     
      if (err) {
        console.error(err.message);
        return;
      }
      // Process the rows
     dbFileData["Total Reference"]= rows.length ;
    });
    db.all("SELECT * FROM _attributes_", [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return;
      }
      // Process the rows
      dbFileData["Total Atrributes"]=rows.length
    });
     db.all("SELECT * FROM _settings_", [], (err, rows) => {
       if (err) {
         console.error(err.message);
         return;
       }
       // Process the rows
       dbFileData["settings"] = rows;
     });
    db.close((err) => {
      const jsonString = JSON.stringify(dbFileData);
      console.log(jsonString);
       res.send(jsonString);
      if (err) {
        console.error(err.message);
        return;
      }
      console.log("Closed the database connection.");
     
    });
    
  }
  if (fileExtension === "xml") {
     console.log(pathOfFile);
     fs.readFile(pathOfFile, (err, data) => {
       if (err) {
         res.send(err);
       } else {
         const jsonResult = convert.xml2json(data, {
           compact: true,
           spaces: 2,
         });

         res.send(jsonResult);
       }
     });
  }

});

app.use("/auth", authRouter);
app.use("/history", historyRoute);

app.listen(4000,()=>console.log("server has started@4000"))
