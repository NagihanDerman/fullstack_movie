const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");

const keys = ["title", "year", "rating", "description", "language", "director"];

const postRequest = async (req, res) => {
  if (req.url === "/api/movies") {
    // istegin body kısmına erisme
    const body = await bodyParser(req);

    // gelen veriyi kontrol et
    if (
      keys.some((key) => !body[key]) ||
      // genre bir dizi mi kontrol ediyor
      !Array.isArray(body.genre) ||
      body.genre.length === 0 ||
      // cast bir dizi mi kontrol ediyor
      !Array.isArray(body.cast) ||
      body.cast.length === 0
    ) {
      res.writeHead(404);
      res.end("Lütfen zorunlu olan bütün alanları tanımlayınnn");
      return;
    }

    // kaydedilecek filme id ekle (universal unique identifier/unic id ekliyor)
    body.id = crypto.randomUUID();

    // json dosyasından verileri alma
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);

    // mevcut filmlerin uzerine yeni film ekle
    data.push(body);

    // json dosyasını guncelle
    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    // client'a cevap gonder
    res.writeHead(201);
    res.end(JSON.stringify(body));
  } else {
    res.writeHead(404);
    res.end("Geçersiz yola istek atıldı");
  }
};

module.exports = postRequest;
