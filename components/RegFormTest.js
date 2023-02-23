import React from "react";
import Image from 'next/image'
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-orange-200 ">
      <>
        <p className="text-2xl font-bold text-grey-800 text-center pt-10 pb-10 bg-orange-200">

        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-4xl my-6 bg-orange-100 shadow-md rounded p-10"
        >
          <p className="flex justify-between text-2xl font-bold text-grey-800 text-center px-8 pt-10 pb-10 mb-2 bg-orange-300">
          <Image
                  src="/GLVN_Minimal_small.png"
                  alt="GLVN Icon"
                  width={150}
                  height={150}
              ></Image>
          GLVN Registration Form 2023-2024
        </p>
        
          <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm shadow-md">
            Parent Information
          </h2>
          <h3 className="flex justify-center text-lg font-bold p-4 rounded-sm underline ">
            PARENT/GUARDIAN 1 INFORMATION <p className="text-red-500">*</p>
          </h3>
          <div className="my-4">
            <label
              className=" text-gray-700 font-medium mb-2 flex"
              htmlFor="pg1_first_name"
            >
              Parent/Guardian 1 Name: <p className="text-red-500">*</p>
            </label>
            <div className="flex space-x-3">
              <input
                placeholder="First Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="pg1_first_name"
                id="pg1_first_name"
                {...register("pg1_first_name", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "invalid first name",
                  },
                })}
              />
              {errors.pg1_first_name && (
                <span className="text-red-500">This field is required</span>
              )}

              <input
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="pg1_last_name"
                id="pg1_last_name"
                {...register("pg1_last_name", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "invalid last name",
                  },
                })}
              />
              {errors.pg1_last_name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="my-4">
            <label
              className=" text-gray-700 font-medium mb-2 flex"
              htmlFor="pg1_phone"
            >
              Parent/Guardian 1 Phone #: <p className="text-red-500"> *</p>
            </label>
            <input
              placeholder="(000)-000-0000"
              className="w-full border border-gray-400 p-2 rounded"
              type="tel"
              name="pg1_phone"
              id="pg1_phone"
              {...register("pg1_phone", {
                required: true,
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.pg1_phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="my-4">
            <label
              className="flex text-gray-700 font-medium mb-2"
              htmlFor="pg1_email"
            >
              Parent/Guardian 1 Email:<p className="text-red-500">*</p>
            </label>
            <input
              placeholder="ex. Tuan1987@yahoo.com"
              className="w-full border border-gray-400 p-2 rounded"
              type="email"
              name="pg1_email"
              id="pg1_email"
              {...register("pg1_email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.pg1_email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <h3 className="text-lg font-bold text-center p-4 rounded-sm underline ">
            PARENT/GUARDIAN 2 INFORMATION
          </h3>
          <div className="my-4">
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
                {...register("pg2_first_name", {
                  required: false,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid first name",
                  },
                })}
              />
              {errors.pg2_first_name && (
                <p className="text-red-500">{errors.pg2_first_name.message}</p>
              )}

              <input
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="pg2_last_name"
                id="pg2_last_name"
                {...register("pg2_last_name", {
                  required: false,
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Invalid last name",
                  },
                })}
              />
              {errors.pg2_last_name && (
                <p className="text-red-500">{errors.pg2_last_name.message}</p>
              )}
            </div>
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
              {...register("pg2_phone", {
                required: false,
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.pg2_phone && (
              <p className="text-red-500">{errors.pg2_phone.message}</p>
            )}
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pg2_email"
            >
              Parent/Guardian 2 Email:
            </label>
            <input
              placeholder="ex. Tuan1987@yahoo.com"
              className="w-full border border-gray-400 p-2 rounded"
              type="email"
              name="pg2_email"
              id="pg2_email"
              {...register("pg2_email", {
                required: false,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.pg2_email && (
              <p className="text-red-500">{errors.pg2_email.message}</p>
            )}

            <div className="my-4 mt-10 py-2">
              <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm shadow-md mb-10">
                Address Information
              </h2>
              <label
                className="flex text-gray-700 font-medium mb-2 mt-4"
                htmlFor="address"
              >
                Street Address: <p className="text-red-500">*</p>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                id="address"
                {...register("address", {
                  required: "Address is required",
                  pattern: {
                    value: /^\s*\S+(?:\s+\S+){2}/i,
                    message: "Invalid Street Address",
                  },
                })}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div className="my-4">
              <div className="flex justify-between space-x-3">
                <div>
                  <label
                    className="flex text-gray-700 font-medium mb-2"
                    htmlFor="City"
                  >
                    City:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="Minneapolis"
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    name="City"
                    id="City"
                    {...register("City", {
                      required: true,
                      pattern: {
                        value: /^[A-Za-z.]+$/i,
                        message: "invalid city name",
                      },
                    })}
                  />
                  {errors.City && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label
                    className="flex text-gray-700 font-medium mb-2"
                    htmlFor="City"
                  >
                    State:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="MN"
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    name="state"
                    id="state"
                    {...register("state", {
                      required: true,
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "invalid State name",
                      },
                    })}
                  />
                  {errors.state && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div>
                  <label
                    className="flex text-gray-700 font-medium mb-2"
                    htmlFor="zipcode"
                  >
                    Zipcode:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="55443"
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    {...register("zipcode", {
                      required: true,
                      pattern: {
                        value: /^[0-9]{5}$/i,
                        message: "invalid zipcode",
                      },
                    })}
                  />
                  {errors.zipcode && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm shadow-md mt-10 mb-10">
              Student Information
            </h2>

            <div className="my-4">
              <label
                className="flex text-gray-700 font-medium mb-2"
                htmlFor="studentSaintName"
              >
                Student's Saint Name: <p className="text-red-500">*</p>
              </label>
              <input
                placeholder="ex. St.Thomas Aquinas"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="studentSaintName"
                id="studentSaintName"
                {...register("studentSaintName", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z.]+$/i,
                    message: "Invalid Saint name",
                  },
                })}
              />
              {errors.zipcode && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <label
              className="flex text-gray-700 font-medium mb-2"
              htmlFor="studentFirstName"
            >
              Student's Name:<p className="text-red-500">*</p>
            </label>
            <div className="flex space-x-3">
              <input
                placeholder="First Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="studentFirstName"
                id="studentFirstName"
                {...register("studentFirstName", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z.]+$/i,
                    message: "Invalid Name",
                  },
                })}
              />
              {errors.studentFirstName && (
                <span className="text-red-500">This field is required</span>
              )}
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="studentLastName"
              ></label>
              <input
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 rounded"
                type="text"
                name="studentLastName"
                id="studentLastName"
                {...register("studentLastName", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z.]+$/i,
                    message: "Invalid last name",
                  },
                })}
              />
              {errors.studentLastName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="my-4">
              <label
                className="flex text-gray-700 font-medium mb-2"
                htmlFor="studentDOB"
              >
                Student's Date of Birth<p className="text-red-500">*</p>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded"
                type="date"
                name="studentDOB"
                id="studentDOB"
                {...register("studentDOB", {
                  required: true,
                  pattern: {
                    message: "Invalid Date",
                  },
                })}
              />
              {errors.studentDOB && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="my-4">
              <label
                className="flex text-gray-700 font-medium mb-2"
                htmlFor="studentBaptismDate"
              >
                Student's Baptism Date<p className="text-red-500">*</p>
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded"
                type="date"
                name="studentBaptismDate"
                id="studentBaptismDate"
                {...register("studentBaptismDate", {
                  required: true,
                  pattern: {
                    message: "Invalid Date",
                  },
                })}
              />
              {errors.studentBaptismDate && (
                <span className="text-red-500">This field is required</span>
              )}
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
                {...register("studentFirstCommunionDate", {
                  required: false,
                  pattern: {
                    message: "Invalid Date",
                  },
                })}
              />
              {errors.studentFirstCommunionDate && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <h2 className="text-lg font-bold bg-orange-200 p-4 rounded-sm mt-10 mb-10 shadow-md">
              Payment Information
            </h2>

            <div className="my-4 flex justify-center">
              <button
                className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 font-bold text-lg"
                type="submit"
              >
                Register!
              </button>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default Form;
