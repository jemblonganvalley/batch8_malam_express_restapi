const express = require("express");
const absen = express.Router();
const {
  tambahAbsen,
  tampilAbsen,
  hapusAbsen,
  editAbsen,
} = require("../model/AbsenModel");

// POST data to absen
absen.post("/", (req, res) => {
  //tangkap data dari request

  let data = req.body;

  tambahAbsen(data)
    .then((result) => {
      if (result.length > 0) {
        res.status(201).json({
          msg: "sukses masukan data",
        });
      } else {
        res.status(400).json({
          msg: "data gagal masuk..",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        msg: "error pada mysql sintax",
      });
    });
});

// GET data absen
absen.get("/", (req, res) => {
  // function model tampilAbsen
  tampilAbsen()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        msg: "tidak bisa menampilkan data..",
      });
    });
});

absen.delete("/", (req, res) => {
  let data = req.body;

  hapusAbsen(data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          msg: "data berhasil di delete",
        });
      } else {
        res.status(404).json({
          msg: "tidak ada data yang di delete..",
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        msg: "gagal delete data",
      });
    });
});

absen.patch("/edit/:id", (req, res) => {
  //capture params id
  let id = req.params.id;

  //capture body data
  let data = req.body;

  editAbsen(id, data)
    .then((result) => {
      res.status(200).json({
        hasil: result,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = absen;
