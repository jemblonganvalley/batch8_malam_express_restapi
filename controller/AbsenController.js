const express = require("express");
const absen = express.Router();
const { tambahAbsen } = require("../model/AbsenModel");

// POST data to absen
absen.post("/", (req, res) => {
  //tangkap data dari request

  let data = req.body;

  tambahAbsen(data)
    .then((result) => {
      res.json({
        message: "data berhasil dimasukan",
        rows: result,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = absen;
