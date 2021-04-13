const db = require("./connection");

// tambah absen
const tambahAbsen = async (data) => {
  return await db
    .table("siswa")
    .insert(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

module.exports = { tambahAbsen };
