const { Router } = require("express");

const router = Router();

router.route("/").get((req, res) => {
  console.log("got");
  res.status(200).json({
    status: "works",
  });
});

module.exports = router;
