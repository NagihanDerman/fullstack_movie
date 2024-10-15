const fs = require("fs");

const getRequest = (req, res) => {
  // url in adresini degiskene aktarma ,sondaki params kismi haric
  const path = req.url.slice(0, 11);

  // url in sonundaki id ye ulasma
  const id = req.url.split("/")[3];

  // url in sonundaki parametrenin degerine ulasma
  const param = req.url.split("=").pop().toLowerCase().trim();

  // yola id eklenirse bir filmi gonder
  if (path === "/api/movies" && id) {
    // 1) json dosyasından filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // 2) url deki id y ekarsilik gelen elemanı dizide arama
    const movie = data.find((i) => i.id === id);

    // 3) eger film bulunursa client a gonder
    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    // 4) eger film bulunamazsa hata gonder
    res.writeHead(404);
    return res.end(
      JSON.stringify({ message: "The searched film could not be found" }) //Aranılan film bulunamadı
    );
  }

  // temel url e istek atılırsa bbutun  filmleri gonder
  if (path === "/api/movies") {
    // 1) json dosyasından filmleri al
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // eger parametre varsa filtrelemis  filmleri gonder
    if (param && param !== "/api/movies") {
      const filtred = movies.filter((movie) =>
        movie.title.toLowerCase().includes(param)
      );

      return res.end(JSON.stringify(filtred));
    }

    // eger parmaetre yoksa butun filmleri gonderir
    return res.end(JSON.stringify(movies));
  }

  // yol yanlissa hata gonder
  res.writeHead(404);
  res.end(JSON.stringify({ message: " Path not found" })); //Yol bulunamadı
};

module.exports = getRequest;
