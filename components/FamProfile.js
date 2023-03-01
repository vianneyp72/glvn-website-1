import React from "react";
import Image from "next/image";
import { useForm, control, useFieldArray } from "react-hook-form";
import axios from "axios";

const FamProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "students_cart",
    control,
  });

  const onSubmit = async (data) => {
    console.log("Data:", data);
    try {
      const response = await axios.post("/api/createParent", data);
      console.log("Form submitted successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  console.log(fields);

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white">
      <>
        <p className="pt-10 pb-10"></p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-4xl my-6 bg-secondary shadow-md rounded-lg p-10"
        >
          <div className="flex justify-center text-2xl pl-10 px-10 pt-10 pb-10 mb-2 bg-fourth shadow-xl rounded-lg">
            <div>
              <p className="font-bold sm:text-4xl lg:text-5xl text-white">
                Family Profile
              </p>
            </div>
          </div>

          <h2 className="text-lg font-bold bg-fourth p-4 rounded-lg shadow-md text-primarytext">
            Parent Information
          </h2>
          <h3 className="flex justify-center text-lg font-bold p-4 rounded-sm text-white">
            PARENT/GUARDIAN 1 INFORMATION <p className="text-red-500">*</p>
          </h3>

          <div className="my-4">
            <div className="flex flex-col md:flex-row justify-between md:space-x-3">
              <div className="w-full">
                <label
                  className="flex text-gray-200 font-medium mb-2"
                  htmlFor="pg1_first_name"
                >
                  Parent/Guardian 1 First Name:{" "}
                  <p className="text-red-500">*</p>
                </label>
                <input
                  placeholder="First Name"
                  className="w-full border bg-tertiary border-fourth p-2 rounded"
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
              </div>
              <div className="w-full">
                <label
                  className="flex text-gray-200 font-medium mb-2"
                  htmlFor="pg1_last_name"
                >
                  Parent/Guardian 1 Last Name:
                  <p className="text-red-500">*</p>
                </label>

                <input
                  placeholder="Last Name"
                  className="w-full border bg-tertiary border-fourth p-2 rounded"
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
          </div>

          <div className="my-4">
            <label
              className=" text-gray-200 font-medium mb-2 flex"
              htmlFor="pg1_phone"
            >
              Parent/Guardian 1 Phone #: <p className="text-red-500"> *</p>
            </label>
            <input
              placeholder="(000)-000-0000"
              className="w-full border bg-tertiary border-fourth p-2 rounded"
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
              className="flex text-gray-200 font-medium mb-2"
              htmlFor="pg1_email"
            >
              Parent/Guardian 1 Email:<p className="text-red-500">*</p>
            </label>
            <input
              placeholder="ex. Tuan1987@yahoo.com"
              className="w-full border bg-tertiary border-fourth p-2 rounded"
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
          <h3 className="text-lg font-bold text-center p-4 rounded-sm text-white ">
            PARENT/GUARDIAN 2 INFORMATION
          </h3>
          <div className="my-4">
            <div className="flex flex-col md:flex-row justify-between md:space-x-3">
              <div className="w-full">
                <label
                  className="flex text-gray-200 font-medium mb-2"
                  htmlFor="pg1_first_name"
                >
                  Parent/Guardian 2 First Name:{" "}
                </label>
                <input
                  placeholder="First Name"
                  className="w-full border bg-tertiary border-fourth p-2 rounded"
                  type="text"
                  name="pg2_first_name"
                  id="pg2_first_name"
                  {...register("pg2_first_name", {
                    required: false,
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "invalid first name",
                    },
                  })}
                />
                {errors.pg2_first_name && (
                  <span className="text-red-500">Invalid Name</span>
                )}
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-200 font-medium mb-2"
                  htmlFor="pg1_last_name"
                >
                  Parent/Guardian 2 Last Name:
                </label>

                <input
                  placeholder="Last Name"
                  className="w-full border bg-tertiary border-fourth p-2 rounded"
                  type="text"
                  name="pg2_last_name"
                  id="pg2_last_name"
                  {...register("pg2_last_name", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Invalid last name",
                    },
                  })}
                />
                {errors.pg2_last_name && (
                  <span className="text-red-500">Invalid Name</span>
                )}
              </div>
            </div>
          </div>
          <div className="my-4">
            <label
              className="block text-gray-200 font-medium mb-2"
              htmlFor="pg2_phone"
            >
              Parent/Guardian 2 Phone #:
            </label>
            <input
              placeholder="(000)-000-0000"
              className="w-full border bg-tertiary border-fourth p-2 rounded"
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
              className="block text-gray-200 font-medium mb-2"
              htmlFor="pg2_email"
            >
              Parent/Guardian 2 Email:
            </label>
            <input
              placeholder="ex. Tuan1987@yahoo.com"
              className="w-full border bg-tertiary border-fourth p-2 rounded"
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
              <h2 className="text-lg font-bold bg-fourth p-4 rounded-lg shadow-md text-primarytext">
                Address Information
              </h2>
              <label
                className="flex text-gray-200 font-medium mb-2 mt-4"
                htmlFor="street_address"
              >
                Street Address: <p className="text-red-500">*</p>
              </label>
              <input
                className="w-full border bg-tertiary border-fourth p-2 rounded"
                type="text"
                id="street_address"
                {...register("street_address", {
                  required: "This field is required",
                  pattern: {
                    value: /^\s*\S+(?:\s+\S+){2}/i,
                    message: "Invalid Street street_address",
                  },
                })}
              />
              {errors.street_address && (
                <p className="text-red-500">{errors.street_address.message}</p>
              )}
            </div>

            <div className="my-4">
              <div className="flex flex-col md:flex-row justify-between md:space-x-3">
                <div className="w-full">
                  <label
                    className="flex text-gray-200 font-medium mb-2"
                    htmlFor="city"
                  >
                    City:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="Minneapolis"
                    className="w-full border bg-tertiary border-fourth p-2 rounded"
                    type="text"
                    name="city"
                    id="city"
                    {...register("city", {
                      required: true,
                      pattern: {
                        value: /^[A-Za-z. ]+$/i,
                        message: "invalid city name",
                      },
                    })}
                  />
                  {errors.city && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full">
                  <label
                    className="flex text-gray-200 font-medium mb-2"
                    htmlFor="City"
                  >
                    State:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="MN"
                    className="w-full border bg-tertiary border-fourth p-2 rounded"
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

                <div className="w-full">
                  <label
                    className="flex text-gray-200 font-medium mb-2"
                    htmlFor="zipcode"
                  >
                    Zipcode:<p className="text-red-500">*</p>
                  </label>
                  <input
                    placeholder="55443"
                    className="w-full border bg-tertiary border-fourth p-2 rounded"
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
              <div className="border mt-10 border-gray-700"></div>
              <div className="my-4 flex mt-5">
                <button
                  className="bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-900 font-bold text-lg shadow-lg ml-3"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default FamProfile;
