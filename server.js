//import package
const express = require("express");
const cors = require("cors");
const absen = require("./controller/AbsenController");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
// absen
app.use("/api/absen", absen);

// login siswa
// register siswa

app.listen(3000, () => {
  console.log("berhasil..");
});
