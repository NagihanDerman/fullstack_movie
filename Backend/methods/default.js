const defaultRequest = (req, res) => {
  //cevabin durum kodunu belirleme
  res.statusCode = 404;

  //cevap ile gonderilecek icerigin tipini header a ekleme
  // res.setHeader("Content-Type", "application/json");

  //cevap icerigini belirleme
  res.write(JSON.stringify({ message: "istek adresi hatali" }));

  //client' e cevabi gonder
  res.end();
};

module.exports = defaultRequest;
