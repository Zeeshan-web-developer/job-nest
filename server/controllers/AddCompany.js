const asyncHandler = require("../middelwares/async");

 const { connectDB } = require("../config/db");
 const CompanyModel = require("../models/Company");

exports.addNewCompany = asyncHandler(async (req, res, next) => {
    connectDB();

    const company = await CompanyModel.create(req.body);
    res.status(201).json(company);

});