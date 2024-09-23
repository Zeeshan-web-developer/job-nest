"use client";
import React, { useState } from "react";
import axios from "axios";

interface CompanyFormProps {
  onSubmit: (companyData: CompanyData) => void;
}

interface CompanyData {
  name: string;
  company_logo: string;
  company_website: string;
  company_location: string;
  company_description: string;
  company_email: string;
  company_phone: string;
  established_year: number;
  company_size: string;
}

const AddCompanyForm: React.FC<CompanyFormProps> = () => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
    company_logo: "",
    company_website: "",
    company_location: "",
    company_description: "",
    company_email: "",
    company_phone: "",
    established_year: new Date().getFullYear(),
    company_size: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const url = "http://localhost:3009/api/v1/company/add-new-company";
      const res = await axios.post(url, companyData);
      if (res.status === 200) {
        alert("Company Added Successfully");
        setCompanyData({
          name: "",
          company_logo: "",
          company_website: "",
          company_location: "",
          company_description: "",
          company_email: "",
          company_phone: "",
          established_year: new Date().getFullYear(),
          company_size: "",
        });
      } else {
        alert("Company Not Added");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="max-w-xl mx-auto p-8 shadow-lg rounded-lg bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add New Company
      </h2>

      {/* Company Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={companyData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Logo */}
      <div className="mb-4">
        <label htmlFor="company_logo" className="block text-gray-700 mb-2">
          Company Logo URL
        </label>
        <input
          type="text"
          id="company_logo"
          name="company_logo"
          value={companyData.company_logo}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Website */}
      <div className="mb-4">
        <label htmlFor="company_website" className="block text-gray-700 mb-2">
          Company Website
        </label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          value={companyData.company_website}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Location */}
      <div className="mb-4">
        <label htmlFor="company_location" className="block text-gray-700 mb-2">
          Company Location
        </label>
        <input
          type="text"
          id="company_location"
          name="company_location"
          value={companyData.company_location}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Description */}
      <div className="mb-4">
        <label
          htmlFor="company_description"
          className="block text-gray-700 mb-2"
        >
          Company Description
        </label>
        <textarea
          id="company_description"
          name="company_description"
          value={companyData.company_description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
      </div>

      {/* Company Email */}
      <div className="mb-4">
        <label htmlFor="company_email" className="block text-gray-700 mb-2">
          Company Email
        </label>
        <input
          type="email"
          id="company_email"
          name="company_email"
          value={companyData.company_email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Phone */}
      <div className="mb-4">
        <label htmlFor="company_phone" className="block text-gray-700 mb-2">
          Company Phone
        </label>
        <input
          type="tel"
          id="company_phone"
          name="company_phone"
          value={companyData.company_phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Established Year */}
      <div className="mb-4">
        <label htmlFor="established_year" className="block text-gray-700 mb-2">
          Established Year
        </label>
        <input
          type="number"
          id="established_year"
          name="established_year"
          value={companyData.established_year}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      {/* Company Size */}
      <div className="mb-4">
        <label htmlFor="company_size" className="block text-gray-700 mb-2">
          Company Size
        </label>
        <input
          type="text"
          id="company_size"
          name="company_size"
          value={companyData.company_size}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Add Company
      </button>
    </form>
  );
};

export default AddCompanyForm;
