import "dotenv/config";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Moment from "moment-timezone";

// import dbConnect from "./src/database/dbConnect";

import ping from "./src/routes/ping";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// =====================

app.use("/ping", ping);

app.listen(port, async () => {
  // await dbConnect().then(() => console.log("Connected to DB"));
  console.log(`Listening on ${port} - ${Moment().tz("Asia/Dubai").format("DD MMM YYYY hh:mm:ss A")}`);
});
