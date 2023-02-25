const express = require("express");
const cors = require ("cors")
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
