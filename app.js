import bodyParser from "body-parser";
import express from "express";
import dbConfig from "./db/dbConfig.js";
import TaskRouter from "./routes/task.route.js";

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use("/",TaskRouter);

app.listen(3000,()=>{
    console.log("server started....");
})