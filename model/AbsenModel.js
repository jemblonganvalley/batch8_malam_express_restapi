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

//tampil absen
const tampilAbsen = async () => {
  return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

//delete data absen
const hapusAbsen = async (data) => {
  return await db("siswa")
    .where(data)
    .del()
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

//update data
const editAbsen = async (id, data) => {
  return await db("siswa")
    .where({ id: id })
    .update(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

module.exports = { tambahAbsen, tampilAbsen, hapusAbsen, editAbsen };
