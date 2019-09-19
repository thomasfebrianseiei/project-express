const express = require("express");
const router = express.Router();
const user = require("../data/user");

router.get("/", (req, res, next) => {
  res.send({
    data: user
  });
});

router.post("/", (req, res, next) => {
  user.push(req.body);
  res.send({
    data: user
  });
});

router.delete("/:id", (req, res, next) => {
  user.splice(req.params.id, 1);
  res.send({
    data: user
  });
});

router.put("/:id", (req, res, next) => {
  user.splice(req.params.id,1, {
    id: parseInt(req.body.id),
    name: req.body.name
  });
  res.send({
    data: user
  });
});
module.exports = router;
