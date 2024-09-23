const mongoose = require("mongoose");

// Create Company schema
const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a company name"],
  },
  company_logo: {
    type: String,
    required: [true, "Please add a company logo"],
  },
  company_website: {
    type: String,
    required: [true, "Please add a company website"],
  },
  company_location: {
    type: String,
    required: [true, "Please add a company location"],
  },
  company_description: {
    type: String,
    required: [true, "Please add a company description"],
  },
  company_email: {
    type: String,
    required: [true, "Please add a company email"],
    unique: true,
  },
  company_phone: {
    type: String,
    required: [true, "Please add a company phone number"],
  },
  established_year: {
    type: Number,
    required: [true, "Please add the year the company was established"],
  },
  company_size: {
    type: String,
    required: [true, "Please add the company size"],
  },
});

// Export the Company model
module.exports = mongoose.model("Company", CompanySchema);
