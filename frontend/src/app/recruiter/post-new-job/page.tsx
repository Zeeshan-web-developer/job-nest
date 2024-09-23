"use client";
import React, { useState } from "react";
import axios from "axios";

interface JobFormProps {
  onSubmit: (jobData: JobData) => void;
}

interface JobData {
  job_title: string;
  company_id: string;
  job_type: string;
  job_description: string;
  job_salary: string;
  job_location: string;
  job_skills: string;
  job_experience: string;
  job_education: string;
  job_requirements: string;
  last_date: string;
}

const PostJobForm: React.FC<JobFormProps> = ({ onSubmit }) => {
  const [jobData, setJobData] = useState<JobData>({
    job_title: "",
    company_id: "",
    job_type: "Full Time",
    job_description: "",
    job_salary: "",
    job_location: "",
    job_skills: "",
    job_experience: "",
    job_education: "",
    job_requirements: "",
    last_date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3009/api/v1/employer/add-new-job";
      const res = await axios.post(url, jobData);
      if (res.status === 200) {
        alert("Job Added Successfully");
        setJobData({
          job_title: "",
          company_id: "",
          job_type: "Full Time",
          job_description: "",
          job_salary: "",
          job_location: "",
          job_skills: "",
          job_experience: "",
          job_education: "",
          job_requirements: "",
          last_date: "",
        });
      } else {
        alert("Error in Adding Job");
      }
    } catch (error) {
      alert("Error in Adding Job");
    }
  };

  return (
    <form
      className="max-w-xl mx-auto p-8 shadow-lg rounded-lg bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Post a New Job
      </h2>

      {/* Job Title */}
      <div className="mb-4">
        <label htmlFor="job_title" className="block text-gray-700 mb-2">
          Job Title
        </label>
        <input
          type="text"
          id="job_title"
          name="job_title"
          value={jobData.job_title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company ID */}
      <div className="mb-4">
        <label htmlFor="company_id" className="block text-gray-700 mb-2">
          Company ID
        </label>
        <input
          type="text"
          id="company_id"
          name="company_id"
          value={jobData.company_id}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label htmlFor="job_type" className="block text-gray-700 mb-2">
          Job Type
        </label>
        <select
          id="job_type"
          name="job_type"
          value={jobData.job_type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
          <option value="Temporary">Temporary</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Job Description */}
      <div className="mb-4">
        <label htmlFor="job_description" className="block text-gray-700 mb-2">
          Job Description
        </label>
        <textarea
          id="job_description"
          name="job_description"
          value={jobData.job_description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
      </div>

      {/* Job Salary */}
      <div className="mb-4">
        <label htmlFor="job_salary" className="block text-gray-700 mb-2">
          Job Salary
        </label>
        <input
          type="text"
          id="job_salary"
          name="job_salary"
          value={jobData.job_salary}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Location */}
      <div className="mb-4">
        <label htmlFor="job_location" className="block text-gray-700 mb-2">
          Job Location
        </label>
        <input
          type="text"
          id="job_location"
          name="job_location"
          value={jobData.job_location}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Skills */}
      <div className="mb-4">
        <label htmlFor="job_skills" className="block text-gray-700 mb-2">
          Job Skills
        </label>
        <input
          type="text"
          id="job_skills"
          name="job_skills"
          value={jobData.job_skills}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Experience */}
      <div className="mb-4">
        <label htmlFor="job_experience" className="block text-gray-700 mb-2">
          Job Experience
        </label>
        <input
          type="text"
          id="job_experience"
          name="job_experience"
          value={jobData.job_experience}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Education */}
      <div className="mb-4">
        <label htmlFor="job_education" className="block text-gray-700 mb-2">
          Job Education
        </label>
        <input
          type="text"
          id="job_education"
          name="job_education"
          value={jobData.job_education}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Job Requirements */}
      <div className="mb-4">
        <label htmlFor="job_requirements" className="block text-gray-700 mb-2">
          Job Requirements
        </label>
        <textarea
          id="job_requirements"
          name="job_requirements"
          value={jobData.job_requirements}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
      </div>

      {/* Last Date */}
      <div className="mb-4">
        <label htmlFor="last_date" className="block text-gray-700 mb-2">
          Last Date to Apply
        </label>
        <input
          type="date"
          id="last_date"
          name="last_date"
          value={jobData.last_date}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Post Job
      </button>
    </form>
  );
};

export default PostJobForm;
