const http = require("http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequest = require("./methods/default");

// server olusturma
const server = http.createServer((req, res) => {
  // butun cevaplarda gecerli ortak bir json verisi header a ekleme
  res.setHeader("Content-Type", "application/json");

  // kaynak paylasiminda sorun yasamamak icin (CORS eklemesi yapiyoruz)
  res.setHeader("Access-Control-Allow-Origin", "*");

  //istegin turune gore cient e cevap olusturma
  switch (req.method) {
    case "GET":
      return getRequest(req, res);

    case "POST":
      return postRequest(req, res);

    case "DELETE":
      return deleteRequest(req, res);

    default:
      return defaultRequest(req, res);
  }
});

//dinleyici portali olusturma
const port = 4090;

server.listen(port, () => {
  console.log(`server ${port}'a gelen istekleri dinliyor`);
});
