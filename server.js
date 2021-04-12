const express = require('express');
const cors = require('cors');

require('dotenv').config()
const mongo = require('./src/database/dbConnect');  // Activate once DB Credentials are added in .env file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// =====================

const ping = require('./src/routes/ping')
app.use('/ping', ping);

app.listen(port, async () => {
    // await mongo().then(console.log('Database Connected'))  // Activate once DB Credentials are added in .env file 
    console.log(`Listening on ${port}`);
})