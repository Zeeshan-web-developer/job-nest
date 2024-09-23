"use client";
import React, { useState } from "react";
import { Modal, Button } from "antd";

type Props = {};

const AppliedJobsList = [
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
  {
    job_title: "Product Manager",
    company_name: "Apple",
    location: "Cupertino",
    date_applied: "01/15/2022",
    status: "Offer",
    action: "View",
    job_id: "1122334455",
    company_id: "1122334455",
    company_logo:
      "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
    company_website: "https://www.apple.com",
    job_description: "Lead the development of new products.",
    job_type: "Full Time",
    job_salary: "150000",
    job_location: "Cupertino",
    job_skills: "Product management, Agile",
    job_category: "Management",
    job_experience: "5-7 years",
    job_education: "Bachelor's",
    job_responsibilities: "Manage product lifecycle.",
    job_requirements: "Experience in product development.",
    job_benefits: "Health insurance, Paid time off",
    job_benefits_other: "Employee discount, Stock options",
  },
  {
    job_title: "UX Designer",
    company_name: "Microsoft",
    location: "Redmond",
    date_applied: "02/01/2022",
    status: "Rejected",
    action: "View",
    job_id: "5566778899",
    company_id: "5566778899",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company_website: "https://www.microsoft.com",
    job_description: "Design user experiences for software products.",
    job_type: "Full Time",
    job_salary: "115000",
    job_location: "Redmond",
    job_skills: "UI/UX design, Adobe XD, Figma",
    job_category: "Design",
    job_experience: "3-5 years",
    job_education: "Bachelor's",
    job_responsibilities: "Create wireframes and prototypes.",
    job_requirements: "Portfolio of design projects.",
    job_benefits: "Health insurance, Retirement plan",
    job_benefits_other: "Remote work options, Learning budget",
  },
  {
    job_title: "Marketing Specialist",
    company_name: "Amazon",
    location: "Seattle",
    date_applied: "03/10/2022",
    status: "Pending",
    action: "View",
    job_id: "6677889900",
    company_id: "6677889900",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company_website: "https://www.amazon.com",
    job_description: "Develop and execute marketing campaigns.",
    job_type: "Full Time",
    job_salary: "90000",
    job_location: "Seattle",
    job_skills: "SEO, SEM, Content marketing",
    job_category: "Marketing",
    job_experience: "2-4 years",
    job_education: "Bachelor's",
    job_responsibilities: "Manage digital marketing efforts.",
    job_requirements: "Experience with marketing tools.",
    job_benefits: "Health insurance, 401(k)",
    job_benefits_other: "Employee discount, Career development",
  },
  {
    job_title: "Sales Manager",
    company_name: "Salesforce",
    location: "San Francisco",
    date_applied: "04/20/2022",
    status: "Interview",
    action: "View",
    job_id: "7788990011",
    company_id: "7788990011",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
    company_website: "https://www.salesforce.com",
    job_description: "Lead sales team to achieve targets.",
    job_type: "Full Time",
    job_salary: "140000",
    job_location: "San Francisco",
    job_skills: "Sales, CRM, Leadership",
    job_category: "Sales",
    job_experience: "5-7 years",
    job_education: "Bachelor's",
    job_responsibilities: "Develop sales strategies.",
    job_requirements: "Proven sales record.",
    job_benefits: "Health insurance, Stock options",
    job_benefits_other: "Flexible work hours, Travel opportunities",
  },
  {
    job_title: "DevOps Engineer",
    company_name: "Netflix",
    location: "Los Gatos",
    date_applied: "05/05/2022",
    status: "Offer",
    action: "View",
    job_id: "8899001122",
    company_id: "8899001122",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company_website: "https://www.netflix.com",
    job_description: "Manage CI/CD pipelines and infrastructure.",
    job_type: "Full Time",
    job_salary: "125000",
    job_location: "Los Gatos",
    job_skills: "AWS, Jenkins, Kubernetes",
    job_category: "Engineering",
    job_experience: "3-5 years",
    job_education: "Bachelor's",
    job_responsibilities: "Automate deployment processes.",
    job_requirements: "Experience with cloud services.",
    job_benefits: "Health insurance, Stock options",
    job_benefits_other: "Streaming subscription, Wellness programs",
  },
  {
    job_title: "Financial Analyst",
    company_name: "Goldman Sachs",
    location: "New York",
    date_applied: "06/15/2022",
    status: "Pending",
    action: "View",
    job_id: "9900112233",
    company_id: "9900112233",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Goldman_Sachs.svg",
    company_website: "https://www.goldmansachs.com",
    job_description: "Analyze financial data and trends.",
    job_type: "Full Time",
    job_salary: "110000",
    job_location: "New York",
    job_skills: "Excel, Financial modeling, Data analysis",
    job_category: "Finance",
    job_experience: "2-4 years",
    job_education: "Bachelor's",
    job_responsibilities: "Prepare financial reports.",
    job_requirements: "Strong analytical skills.",
    job_benefits: "Health insurance, Retirement plan",
    job_benefits_other: "Professional development, Commuter benefits",
  },
  {
    job_title: "Human Resources Manager",
    company_name: "Tesla",
    location: "Palo Alto",
    date_applied: "07/22/2022",
    status: "Rejected",
    action: "View",
    job_id: "0011223344",
    company_id: "0011223344",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    company_website: "https://www.tesla.com",
    job_description: "Manage HR functions and policies.",
    job_type: "Full Time",
    job_salary: "95000",
    job_location: "Palo Alto",
    job_skills: "HR management, Recruitment, Compliance",
    job_category: "Human Resources",
    job_experience: "5-7 years",
    job_education: "Bachelor's",
    job_responsibilities: "Oversee employee relations.",
    job_requirements: "Experience in HR management.",
    job_benefits: "Health insurance, Paid time off",
    job_benefits_other: "Stock options, Employee discounts",
  },
  {
    job_title: "Graphic Designer",
    company_name: "Adobe",
    location: "San Jose",
    date_applied: "08/30/2022",
    status: "Interview",
    action: "View",
    job_id: "2233445566",
    company_id: "2233445566",
    company_logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.png",
    company_website: "https://www.adobe.com",
    job_description: "Create visual content for various platforms.",
    job_type: "Full Time",
    job_salary: "85000",
    job_location: "San Jose",
    job_skills: "Adobe Creative Suite, Graphic design",
    job_category: "Design",
    job_experience: "2-4 years",
    job_education: "Bachelor's",
    job_responsibilities: "Design graphics for marketing materials.",
    job_requirements: "Portfolio of design work.",
    job_benefits: "Health insurance, Retirement plan",
    job_benefits_other: "Remote work options, Learning opportunities",
  },
];

type Job = {
  job_title: string;
  company_name: string;
  location: string;
  date_applied: string;
  status: string;
  action: string;
  job_id: string;
  company_id: string;
  company_logo: string;
  company_website: string;
  job_description: string;
  job_type: string;
  job_salary: string;
  job_location: string;
  job_skills: string;
  job_category: string;
  job_experience: string;
  job_education: string;
  job_responsibilities: string;
  job_requirements: string;
  job_benefits: string;
  job_benefits_other: string;
};

function Page({}: Props) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job>();

  const showModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container mx-auto p-4">
      {AppliedJobsList.map((job) => (
        <div
          key={job.job_id}
          className="mb-6 border rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={job.company_logo}
                alt={job.company_name}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="text-xl font-bold">{job.job_title}</h2>
                <a
                  href={job.company_website}
                  className="text-blue-500 hover:underline"
                >
                  {job.company_name}
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500">{job.location}</p>
              <p className="text-gray-500">{job.date_applied}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full ${
                  job.status === "Pending"
                    ? "bg-yellow-200 text-yellow-700"
                    : "bg-green-200 text-green-700"
                }`}
              >
                {job.status}
              </span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 text-right">
            <Button type="primary" onClick={() => showModal(job)}>
              {job.action}
            </Button>
          </div>
        </div>
      ))}

      {selectedJob && (
        <Modal
          title={selectedJob.job_title}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              OK
            </Button>,
          ]}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">Job Details</h3>
              <p>
                <span className="font-medium text-gray-500">Type:</span>{" "}
                {selectedJob.job_type}
              </p>
              <p>
                <span className="font-medium text-gray-500">Salary:</span> $
                {selectedJob.job_salary}
              </p>
              <p>
                <span className="font-medium text-gray-500">Location:</span>{" "}
                {selectedJob.job_location}
              </p>
              <p>
                <span className="font-medium text-gray-500">Skills:</span>{" "}
                {selectedJob.job_skills}
              </p>
              <p>
                <span className="font-medium text-gray-500">Category:</span>{" "}
                {selectedJob.job_category}
              </p>
              <p>
                <span className="font-medium text-gray-500">Experience:</span>{" "}
                {selectedJob.job_experience} years
              </p>
              <p>
                <span className="font-medium text-gray-500">Education:</span>{" "}
                {selectedJob.job_education}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                Job Responsibilities
              </h3>
              <p>{selectedJob.job_responsibilities}</p>
              <h3 className="font-semibold text-gray-700 mt-4">
                Job Requirements
              </h3>
              <p>{selectedJob.job_requirements}</p>
              <h3 className="font-semibold text-gray-700 mt-4">Benefits</h3>
              <p>{selectedJob.job_benefits}</p>
              <p>{selectedJob.job_benefits_other}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Page;
