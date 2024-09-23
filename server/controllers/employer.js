// @description: create a new job
// @route: POST /api/v1/jobs
// @access: private
 const asyncHandler = require("../middelwares/async");

 const { connectDB } = require("../config/db");
 const JobsModel = require("../models/Jobs");

exports.postNewJob = asyncHandler(async (req, res, next) => {
  connectDB();
  console.log("post-new-job", req.body)

  const job = await JobsModel.create(req.body);
  res.status(201).json(job);
});

// @description: get all my posted jobs
// @route: GET /api/v1/jobs
// @access: private

exports.getMyJobs = asyncHandler(async (req, res, next) => {
  connectDB();
  const jobs = await JobsModel.find();
  res.status(200).json(jobs);
});

exports.getSingleJob = asyncHandler(async (req,res, next) => {
  connectDB();
  const job = await JobsModel.findById(req.params.id);
  res.status(200).json({ message: "get my jobs" });
});
