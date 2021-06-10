const { response, request } = require("express");

module.exports = (app, sql) => {
  app.get("/models/articles", (req, res, next) => {
    sql.getArticles((result) => {
      response.send(result);
    });
  });

  app.get("/models/articles/:key", (req, res, next) => {
    sql.getArticleByKey({ key: req.params.key }, (article) => {
      res.send(article);
    });
  });
};
