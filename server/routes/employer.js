var express = require("express");
const {
  postNewJob,
  getMyJobs,
  getSingleJob,
} = require("../controllers/employer");

const router = express.Router();

router.route("/add-new-job").post(postNewJob).get(getMyJobs);
router.route("/:id").get(getSingleJob);

module.exports = router;


