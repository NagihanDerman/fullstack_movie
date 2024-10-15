const optionsRequest = (req, res) => {
  /*
   * CORS protokolu geregi client tan gelen  post/put/patch/delete idteklerine oncelikle OPTION istegi gonderilir
   * Eger istel verileri destekleniyorsa clienata isteginin cevabini dondurur
   */

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.end();
};

module.exports = optionsRequest;
