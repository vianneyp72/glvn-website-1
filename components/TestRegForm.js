import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [students, setStudents] = useState([
    {
      saintName: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      baptismDate: "",
      firstCommunionDate: "",
    },
  ]);

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // code to submit the form data to your backend
  };

  const addStudent = () => {
    setStudents([
      ...students,
      {
        saintName: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        baptismDate: "",
        firstCommunionDate: "",
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <h3 className="text-lg font-bold">Parent Information</h3>
        <div className="mb-3">
          <label className="block font-bold mb-2">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Father's Phone #</label>
          <input
            type="tel"
            name="fatherPhone"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Father's Email</label>
          <input
            type="email"
            name="fatherEmail"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Mother's Phone #</label>
          <input
            type="tel"
            name="motherPhone"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Mother's Email</label>
          <input
            type="email"
            name="motherEmail"
           
            className="border p-2 w-full"
            ref={register}
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            className="border p-2 w-full"
            ref={register}
          />
        </div>
      </div>

      {students.map((student, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-lg font-bold">Student Information</h3>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's Saint Name
            </label>
            <input
              type="text"
              name={`student[${index}].saintName`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's First Name
            </label>
            <input
              type="text"
              name={`student[${index}].firstName`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's Last Name
            </label>
            <input
              type="text"
              name={`student[${index}].lastName`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's Date of Birth
            </label>
            <input
              type="date"
              name={`student[${index}].dateOfBirth`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's Baptism Date
            </label>
            <input
              type="date"
              name={`student[${index}].baptismDate`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label className="block font-bold mb-2">
              Student's First Communion Date
            </label>
            <input
              type="date"
              name={`student[${index}].firstCommunionDate`}
              className="border p-2 w-full"
              ref={register}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={addStudent}
      >
       
       Add Another Student
</button>
<button
    type="submit"
    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-3"
  >
    Submit
  </button>
</form>
  );
};
export default Form;