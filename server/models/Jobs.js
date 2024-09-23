const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: [true, "Please add a job title"],
  },
  company_name: {
    type: String,
    required: [true, "Please add a company name"],
  },
  company_location: {
    type: String,
    required: [true, "Please add a company location"],
  },
  last_date: {
    type: String,
    required: [true, "Please add a last date"],
  },

  // Auto-generate job_id using ObjectId
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company", // Refer to the Company model
    required: [true, "Please add a company id"],
  },
  company_logo: {
    type: String,
    required: [true, "Please add a company logo"],
  },
  company_website: {
    type: String,
    required: [true, "Please add a company website"],
  },
  job_description: {
    type: String,
    required: [true, "Please add a job description"],
  },
  job_type: {
    type: String,
    required: [true, "Please add a job type"],
    enum: ["Full Time", "Part Time", "Internship", "Temporary", "Contract"],
  },
  job_salary: {
    type: String,
    required: [true, "Please add a job salary"],
  },
  job_location: {
    type: String,
    required: [true, "Please add a job location"],
  },
  job_skills: {
    type: String,
    required: [true, "Please add a job skills"],
  },
  job_experience: {
    type: String,
    required: [true, "Please add a job experience"],
  },
  job_education: {
    type: String,
    required: [true, "Please add a job education"],
  },
  job_requirements: {
    type: String,
    required: [true, "Please add a job requirements"],
  },
  // job_benefits: {
  //   type: String,
  //   required: [true, "Please add a job benefits"],
  // },
  // job_benefits_other: {
  //   type: String,
  //   required: [true, "Please add a job benefits other"],
  // },
});

// Middleware to automatically fetch and add company details
JobsSchema.pre('validate', async function (next) {
  console.log("Running pre-validate middleware");

  try {
    const Company = mongoose.model('Company');
    const company = await Company.findById(this.company_id).exec();

    if (company) {
      this.company_logo = company.company_logo;
      this.company_website = company.company_website;
      this.company_name = company.name; // Automatically populate company_name
      this.company_location = company.company_location;
    } else {
      return next(new Error("Company not found"));
    }
  } catch (error) {
    console.log("pre-validate error:", error);
    return next(error);
  }

  next();
});


module.exports = mongoose.model('Jobs', JobsSchema);
