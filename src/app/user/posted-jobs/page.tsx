"use client";
import React, { useState } from "react";
import { Modal, Button, Upload, message } from "antd";

import { UploadOutlined } from "@ant-design/icons";

const jobs = [
  {
    job_title: "Software Engineer",
    company_name: "Google",
    location: "Mountain View",
    date_applied: "12/12/2021",
    status: "Pending",
    action: "View",
    job_id: "1234567890",
    company_id: "1234567890",
    company_logo:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    company_website: "https://www.google.com",
    job_description: "Develop and maintain software applications.",
    job_type: "Full Time",
    job_salary: "120000",
    job_location: "Mountain View",
    job_skills: "Java, C++, Python",
    job_category: "Engineering",
    job_experience: "2-4 years",
    job_education: "Bachelor's",
    job_responsibilities: "Design, develop, and implement software solutions.",
    job_requirements: "Experience with software development.",
    job_benefits: "Health insurance, 401(k)",
    job_benefits_other: "Free meals, Gym membership",
  },
  {
    job_title: "Data Scientist",
    company_name: "Facebook",
    location: "Menlo Park",
    date_applied: "11/25/2021",
    status: "Interview",
    action: "View",
    job_id: "0987654321",
    company_id: "0987654321",
    company_logo: "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg",
    company_website: "https://www.facebook.com",
    job_description: "Analyze and interpret complex data sets.",
    job_type: "Full Time",
    job_salary: "130000",
    job_location: "Menlo Park",
    job_skills: "Python, R, SQL",
    job_category: "Data Science",
    job_experience: "3-5 years",
    job_education: "Master's",
    job_responsibilities: "Create data-driven solutions.",
    job_requirements: "Strong analytical skills.",
    job_benefits: "Health insurance, Stock options",
    job_benefits_other: "Onsite childcare, Fitness center",
  },
  // Add more job objects here...
];

function Page({}: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [fileList, setFileList] = useState([]);

  const showModal = (job) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
    setFileList([]);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
    setFileList([]);
  };

  const handleApply = () => {
    // Logic to handle job application submission
    message.success("Job application submitted successfully!");
    handleOk();
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.job_id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={job.company_logo}
                alt={`${job.company_name} logo`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{job.job_title}</h2>
                <p className="text-gray-600">{job.company_name}</p>
                <a
                  href={job.company_website}
                  className="text-blue-500 hover:underline"
                >
                  {job.company_website}
                </a>
              </div>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {job.job_location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Salary:</strong> ${job.job_salary}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Type:</strong> {job.job_type}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Skills:</strong> {job.job_skills}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">
                <strong>Status:</strong> {job.status}
              </p>
              <Button type="link" onClick={() => showModal(job)}>
                {job.action}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <Modal
          title={selectedJob.job_title}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleApply}>
              Apply
            </Button>,
          ]}
        >
          <img
            src={selectedJob.company_logo}
            alt={`${selectedJob.company_name} logo`}
            className="w-16 h-16 mb-4"
          />
          <p>
            <strong>Company:</strong> {selectedJob.company_name}
          </p>
          <p>
            <strong>Location:</strong> {selectedJob.job_location}
          </p>
          <p>
            <strong>Salary:</strong> ${selectedJob.job_salary}
          </p>
          <p>
            <strong>Type:</strong> {selectedJob.job_type}
          </p>
          <p>
            <strong>Experience:</strong> {selectedJob.job_experience} years
          </p>
          <p>
            <strong>Education:</strong> {selectedJob.job_education}
          </p>
          <p>
            <strong>Responsibilities:</strong>{" "}
            {selectedJob.job_responsibilities}
          </p>
          <p>
            <strong>Requirements:</strong> {selectedJob.job_requirements}
          </p>
          <p>
            <strong>Benefits:</strong> {selectedJob.job_benefits}
          </p>
          <p>
            <strong>Other Benefits:</strong> {selectedJob.job_benefits_other}
          </p>
          <a
            href={selectedJob.company_website}
            className="text-blue-500 hover:underline"
          >
            {selectedJob.company_website}
          </a>
          <div className="mt-4">
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Resume</Button>
            </Upload>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Page;
