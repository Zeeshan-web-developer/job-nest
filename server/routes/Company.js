var express = require("express");
const {
addNewCompany
} = require("../controllers/AddCompany");

const router = express.Router();

router.route("/add-new-company").post(addNewCompany)


module.exports = router;


