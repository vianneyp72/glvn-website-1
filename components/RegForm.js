import React from "react";
import Image from "next/image";
import { useForm, control, useFieldArray } from "react-hook-form";
import axios from "axios";
import NavBar from "./NavBarParents";

const Form = () => {
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
        <NavBar/>
        <p className="text-2xl font-bold text-grey-800 text-center pt-10 pb-10"></p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-4xl my-6 bg-secondary shadow-md rounded-lg p-10"
        >
          <div className="flex justify-between text-2xl pl-10 px-10 pt-10 pb-10 mb-2 bg-fourth shadow-xl rounded-lg">
            <div className="border-2 border-black border- rounded-md bg-gray-200">
              <Image
                src="/GLVN_Minimal_small.png"
                alt="GLVN Icon"
                width={150}
                height={150}
              ></Image>
            </div>
            <div>
              <p className="font-bold text-sm lg:text-4xl md:text-3xl sm:text-2xl text-white">
                GLVN Registration Form
              </p>
              <p className="text-primarytext text-xs lg:text-4xl md:text-3xl  sm:text-xs">
                2023-2024
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
            </div>

            <h2 className="text-lg font-bold bg-fourth p-4 rounded-lg shadow-md text-primarytext mb-3">
              Student Information
            </h2>

            {fields.map((field, index) => {
              return (
                <>
                  <section
                    className="w-full border border-fourth p-2 rounded mb-3 bg-fourth shadow-md"
                    key={field.id}
                  >
                    <div className="my-4">
                      <label
                        className="flex text-gray-200 font-medium mb-2"
                        htmlFor="studentSaintName"
                      >
                        Student's Saint Name: <p className="text-red-500">*</p>
                      </label>

                      <input
                        placeholder="ex. St.Thomas Aquinas"
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="text"
                        name="studentSaintName"
                        id="studentSaintName"
                        {...register(
                          `students_cart.${index}.studentSaintName`,
                          {
                            required: true,
                            pattern: {
                              value: /^[A-Za-z. ]+$/i,
                              message: "Invalid Saint name",
                            },
                          }
                        )}
                      />
                      {errors.zipcode && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <label
                      className="flex text-gray-200 font-medium mb-2"
                      htmlFor="studentFirstName"
                    >
                      Student's Name:<p className="text-red-500">*</p>
                    </label>
                    <div className="flex flex-col md:flex-row md:space-x-3">
                      <input
                        placeholder="First Name"
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="text"
                        name="studentFirstName"
                        id="studentFirstName"
                        {...register(
                          `students_cart.${index}.studentFirstName`,
                          {
                            required: true,
                            pattern: {
                              value: /^[A-Za-z.]+$/i,
                              message: "Invalid Name",
                            },
                          }
                        )}
                      />
                      {errors.studentFirstName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                      <label
                        className="block text-gray-200 font-medium mb-2"
                        htmlFor="studentLastName"
                      ></label>
                      <input
                        placeholder="Last Name"
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="text"
                        name="studentLastName"
                        id="studentLastName"
                        {...register(`students_cart.${index}.studentLastName`, {
                          required: true,
                          pattern: {
                            value: /^[A-Za-z.]+$/i,
                            message: "Invalid last name",
                          },
                        })}
                      />
                      {errors.studentLastName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="my-4 text-gray-400">
                      <label
                        className="flex text-gray-200 font-medium mb-2"
                        htmlFor="studentDOB"
                      >
                        Student's Date of Birth<p className="text-red-500">*</p>
                      </label>
                      <input
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="date"
                        name="studentDOB"
                        id="studentDOB"
                        {...register(`students_cart.${index}.studentDOB`, {
                          required: true,
                          pattern: {
                            message: "Invalid Date",
                          },
                        })}
                      />
                      {errors.studentDOB && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="my-4 text-gray-400">
                      <label
                        className="flex text-gray-200 font-medium mb-2"
                        htmlFor="studentBaptismDate"
                      >
                        Student's Baptism Date<p className="text-red-500">*</p>
                      </label>
                      <input
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="date"
                        name="studentBaptismDate"
                        id="studentBaptismDate"
                        {...register(
                          `students_cart.${index}.studentBaptismDate`,
                          {
                            required: true,
                            pattern: {
                              message: "Invalid Date",
                            },
                          }
                        )}
                      />
                      {errors.studentBaptismDate && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="my-4 text-gray-400">
                      <label
                        className="block text-gray-200 font-medium mb-2"
                        htmlFor="studentFirstCommunionDate"
                      >
                        Student's First Communion Date
                      </label>
                      <input
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="date"
                        name="studentFirstCommunionDate"
                        id="studentFirstCommunionDate"
                        {...register(
                          `students_cart.${index}.studentFirstCommunionDate`,
                          {
                            required: false,
                            pattern: {
                              message: "Invalid Date",
                            },
                          }
                        )}
                      />
                      {errors.studentFirstCommunionDate && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <button
                        className="bg-red-500 text-white px-2 rounded-lg hover:bg-red-600 font-bold shadow-lg mr-3 mb-3"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                          Remove Student
                        </div>
                      </button>
                    </div>
                  </section>
                </>
              );
            })}
            <section className="pt-3 mb-3">
              <button
                className="bg-blue-600 text-white px-2 rounded-lg hover:bg-blue-700 font-bold shadow-lg ml-3"
                type="button"
                onClick={() => append({})}
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Add Student
                </div>
              </button>
            </section>

            <h2 className="text-lg font-bold bg-fourth p-4 rounded-lg shadow-md text-primarytext mb-3">
              Payment Information
            </h2>

            <div className="text-center space-y-5 text-gray-200">
              <p>
                After submitting this form, please visit the GLVN office to pay
                for registration fees to complete registration for your
                children.
              </p>
              <p className="text-3xl font-bold text-white">
                Registration Fee: $120
              </p>
              <p>
                All students pay $120 for the general GLVN program. Additional
                fees are required for the following grades to cover special
                programming for Sacramental Preparation.
              </p>
            </div>

            <div className="flex justify-center p-6 text-gray-200">
              <div>
                <ul>
                  <li className="border-4 border-r-0 border-gray-100 px-3">
                    {" "}
                    Lop 2 - First Communion{" "}
                  </li>
                  <li className="border-4 border-t-0 border-r-0 border-gray-100 px-3">
                    {" "}
                    Lop 9 - Pre-Confirmation Retreat{" "}
                  </li>
                  <li className="border-4 border-t-0 border-r-0 border-gray-100 px-3">
                    {" "}
                    Lop 10 - Confirmation Retreat{" "}
                  </li>
                  <li className="border-4 border-t-0 border-r-0 border-gray-100 px-3">
                    {" "}
                    Cleaning Fee (Per Family){" "}
                  </li>
                  <li className="border-4 border-t-0 border-r-0 border-gray-100 px-3">
                    {" "}
                    Late Fee{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="border-4 border-gray-100 px-3"> + $100.00 </li>
                  <li className="border-4 border-t-0 border-gray-100 px-3">
                    {" "}
                    + $150.00{" "}
                  </li>
                  <li className="border-4 border-t-0 border-gray-100 px-3">
                    {" "}
                    + $300.00{" "}
                  </li>
                  <li className="border-4 border-t-0 border-gray-100 px-3">
                    {" "}
                    + $25.00{" "}
                  </li>
                  <li className="border-4 border-t-0 border-gray-100 px-3">
                    {" "}
                    + $20.00 per child{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-4 flex justify-center">
              <button
                className="w-full bg-sky-800 text-white py-2 px-4 rounded-lg hover:bg-sky-900 font-bold text-lg shadow-lg"
                type="submit"
              >
                Register!
              </button>
            </div>

            <br />
            <div className="text-center">
              <p className="font-bold text-gray-300 text-sm">
                Dưới sự yêu cầu của cha chánh xứ, Xin mỗi gia đình đóng góp $25
                để giáo xứ có thể mướn người thu dọn trường học hàng tuần. By
                the request of our pastor, each family is asked to contribute
                $25/family to help the parish with the cost of cleaning the
                school.
              </p>
              <br />
              <br />
              <p className="font-bold text-white">
                Registration after May 8th will result in late fees of $20/child
              </p>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default Form;
