import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherPhone: "",
    fatherEmail: "",
    motherName: "",
    motherEmail: "",
    motherPhone: "",
    address: "",
    studentSaintName: "",
    studentFirstName: "",
    studentLastName: "",
    studentDOB: "",
    studentBaptismDate: "",
    studentFirstCommunionDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the server or handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-orange-200 ">
      <>
        <p className="text-2xl font-bold text-grey-800 text-center pt-10 pb-10">
          GLVN Registration Form 2023-2024
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl my-6 bg-orange-100 shadow-md rounded p-10"
        >
          <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm shadow-md">
            Parent Information
          </h2>
          <h3 className="text-lg font-bold text-center p-4 rounded-sm underline ">
            PARENT/GUARDIAN 1 INFORMATION*
          </h3>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg1_first_name"
            >
              Parent/Guardian 1 Name:
            </label>
            <div className="flex space-x-3">
              <input
                placeholder="First Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="pg1_first_name"
                id="pg1_first_name"
                value={formData.pg1_first_name}
                onChange={handleChange}
              />
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="pg1_first_name"
              ></label>
              <input
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="pg1_last_name"
                id="pg1_last_name"
                value={formData.pg1_last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg1_phone"
            >
              Parent/Guardian 1 Phone #:
            </label>
            <input
              placeholder="(000)-000-0000"
              className="w-full border border-gray-400 p-2 rounded"
              type="tel"
              name="pg1_phone"
              id="pg1_phone"
              value={formData.pg1_phone}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg1_email"
            >
              Parent/Guardian 1 Email:
            </label>
            <input
              placeholder="ex. Tuan1987@yahoo.com"
              className="w-full border border-gray-400 p-2 rounded"
              type="email"
              name="pg1_email"
              id="pg1_email"
              value={formData.pg1_email}
              onChange={handleChange}
            />
          </div>
          <h3 className="text-lg font-bold text-center p-4 rounded-sm underline ">
            PARENT/GUARDIAN 2 INFORMATION
          </h3>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="pg2_first_name"
          >
            Parent/Guardian 2 Name:
          </label>
          <div className="flex space-x-3">
            <input
              placeholder="First Name"
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="pg2_first_name"
              id="pg2_first_name"
              value={formData.pg2_first_name}
              onChange={handleChange}
            />
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg2_last_name"
            ></label>
            <input
              placeholder="Last Name"
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="pg2_last_name"
              id="pg2_last_name"
              value={formData.pg2_last_name}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg2_phone"
            >
              Parent/Guardian 2 Phone #:
            </label>
            <input
            placeholder="(000)-000-0000"
              className="w-full border border-gray-400 p-2 rounded"
              type="tel"
              name="pg2_phone"
              id="pg2_phone"
              value={formData.pg2_phone}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg2_email"
            >
              Parent/Guardian 2 Email:
            </label>
            <input
              placeholder="ex. MinhPham2000@gmail.com"
              className="w-full border border-gray-400 p-2 rounded"
              type="email"
              name="pg2_email"
              id="pg2_email"
              value={formData.pg2_email}
              onChange={handleChange}
            />
          </div>
          <h1>
            ____________________________________________________________________________________________________________________________
          </h1>
          <div className="my-4 mt-10">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="address"
            >
              Address:
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm mt-10 shadow-md">
            Student Information
          </h2>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentSaintName"
            >
              Student's Saint Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="studentSaintName"
              id="studentSaintName"
              value={formData.studentSaintName}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentFirstName"
            >
              Student's First Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="studentFirstName"
              id="studentFirstName"
              value={formData.studentFirstName}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentLastName"
            >
              Student's Last Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="text"
              name="studentLastName"
              id="studentLastName"
              value={formData.studentLastName}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentDOB"
            >
              Student's Date of Birth
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="date"
              name="studentDOB"
              id="studentDOB"
              value={formData.studentDOB}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentBaptismDate"
            >
              Student's Baptism Date
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="date"
              name="studentBaptismDate"
              id="studentBaptismDate"
              value={formData.studentBaptismDate}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="studentFirstCommunionDate"
            >
              Student's First Communion Date
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded"
              type="date"
              name="studentFirstCommunionDate"
              id="studentFirstCommunionDate"
              value={formData.studentFirstCommunionDate}
              onChange={handleChange}
            />
          </div>
          <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm mt-10 mb-10 shadow-md">
            Payment Information
          </h2>
          <button className="container bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">
            Register!
          </button>
        </form>
      </>
    </div>
  );
};

export default Form;
