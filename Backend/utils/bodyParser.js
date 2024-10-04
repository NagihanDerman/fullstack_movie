// istegin body kismina eklene verilere erismek icin kucuk parcalar halinde gelen verilere eriserek birlestirip fonk.nun cagirildigi yerde return etmek gerekir.
const bodyParser = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      // fontend'den body'nin her parcasi geldiginde onu alir ve yukardaki stringe ekler
      req.on("data", (chunk) => {
        body += chunk;
      });

      //yukleme bittiginde json veridini js e cevirir =
      req.on("end", () => {
        // fonksiyonun cagiirldigi  yere body icerigini return eder
        resolve(JSON.parse(body));
      });
    } catch (err) {
      // hata olusursa hatayi dondurur.
      reject(err);
    }
  });
};

module.exports = bodyParser;
