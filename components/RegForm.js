import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    fatherName: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherEmail: '',
    motherPhone: '',
    address: '',
    studentSaintName: '',
    studentFirstName: '',
    studentLastName: '',
    studentDOB: '',
    studentBaptismDate: '',
    studentFirstCommunionDate: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send formData to the server or handle form submission here
    console.log(formData)
  }

  return (
    <div className='min-h-screen bg-orange-200 '>
    <><p className="text-2xl font-bold text-grey-800 text-center">GLVN Registration 2023-2024</p>
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl my-6 bg-orange-100 shadow-md rounded p-10">
      <h2 className="text-lg font-bold text-center">Parent Information</h2>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherName">
          Father's Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="fatherName"
          id="fatherName"
          value={formData.fatherName}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherPhone">
          Father's Phone #
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="tel"
          name="fatherPhone"
          id="fatherPhone"
          value={formData.fatherPhone}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="fatherEmail">
          Father's Email
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="email"
          name="fatherEmail"
          id="fatherEmail"
          value={formData.fatherEmail}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="motherName">
          Mother's Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="motherName"
          id="motherName"
          value={formData.motherName}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="motherPhone">
          Mother's Phone #
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="tel"
          name="motherPhone"
          id="motherPhone"
          value={formData.motherPhone}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="motherEmail">
          Mother's Email
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="email"
          name="motherEmail"
          id="motherEmail"
          value={formData.motherEmail}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange} />
      </div>
      <h2 className="text-lg font-bold mt-8 text-center">Student Information</h2>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentSaintName">
          Student's Saint Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="studentSaintName"
          id="studentSaintName"
          value={formData.studentSaintName}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentFirstName">
          Student's First Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="studentFirstName"
          id="studentFirstName"
          value={formData.studentFirstName}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentLastName">
          Student's Last Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="text"
          name="studentLastName"
          id="studentLastName"
          value={formData.studentLastName}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentDOB">
          Student's Date of Birth
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="date"
          name="studentDOB"
          id="studentDOB"
          value={formData.studentDOB}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentBaptismDate">
          Student's Baptism Date
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="date"
          name="studentBaptismDate"
          id="studentBaptismDate"
          value={formData.studentBaptismDate}
          onChange={handleChange} />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="studentFirstCommunionDate">
          Student's First Communion Date
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded"
          type="date"
          name="studentFirstCommunionDate"
          id="studentFirstCommunionDate"
          value={formData.studentFirstCommunionDate}
          onChange={handleChange} />
      </div>
      <button className="container bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">
        Register!
      </button>
    </form></>
          </div>
  )
}

export default Form

