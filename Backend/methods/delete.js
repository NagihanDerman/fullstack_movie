const fs = require("fs");

const deleteRequest = (req, res) => {
  // url'in temel adresini degiskene aktarma (sondaki params disinda kalan)
  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  // url'in sonundaki id degerini degiskene aktarma
  const id = req.url.split("/")[3];

  if (path === "/api/movies" && id) {
    // tum filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // parametre olarak gelen id'li film dizide var mı arar
    const isFound = data.find((i) => i.id === id);

    // yoksa id gecersiz hatası gonderir
    if (!isFound) {
      res.writeHead(404);
      return res.end("Gonderilen id'li eleman bulunamadi");
    }

    // diziden id'si bilinen filmi kaldirma,silme
    const filtred = data.filter((i) => i.id !== id);

    // json dosyasına yeni diziyi aktarma
    fs.writeFileSync("./data/movies.json", JSON.stringify(filtred));

    // client'a cevap gonderir
    res.writeHead(204);
    return res.end();
  }
};

module.exports = deleteRequest;
