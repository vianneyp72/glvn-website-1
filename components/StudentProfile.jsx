import React, { useEffect } from "react";
import { useForm, control, useFieldArray } from "react-hook-form";
import axios from "axios";
import { studentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFirstRender } from "../utils/useFirstRender";

const StudentProfile = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const { fields, append } = useFieldArray({
    name: "students_cart",
    control,
  });

  const firstRender = useFirstRender();

  useEffect(() => {
    const getExistingStudentsInfo = async () => {
      if (firstRender) {
        if (user) {
          const sub = user.sub;
          const records = await studentTable
            .select({
              filterByFormula: `{userID} = "${sub}"`,
            })
            .firstPage();
          for (let i = 0; i < records.length; i++) {
            append({});
            setValue(
              `students_cart.${i}.Saint_Name`,
              records[i]?.fields.Saint_Name
            );
            setValue(
              `students_cart.${i}.First_Name`,
              records[i]?.fields.First_Name
            );
            setValue(
              `students_cart.${i}.Last_Name`,
              records[i]?.fields.Last_Name
            );
            setValue(
              `students_cart.${i}.Birthday`,
              records[i]?.fields.Birthday
            );
            setValue(
              `students_cart.${i}.Baptism_Date`,
              records[i]?.fields.Baptism_Date
            );
            setValue(
              `students_cart.${i}.First_Communion_Date`,
              records[i]?.fields.First_Communion_Date
            );
          }
        }
      }
    };
    getExistingStudentsInfo();
  }, [user]);

  const stuRecIdArr = [];

  const onSubmit = async (data) => {
    const getRecordId = async () => {
      if (user) {
        const sub = user.sub;
        const records = await studentTable
          .select({
            filterByFormula: `{userid} = "${sub}"`,
          })
          .firstPage();
        for (let i = 0; i < records.length; i++) {
          stuRecIdArr.push(records[i].id);
        }
      }
    };
    getRecordId();

    console.log("stuRecArr:", stuRecIdArr);
    console.log("stuRecArr:", stuRecIdArr[0]);
    console.log("stuRecArrLENGTH:", stuRecIdArr.length);

    console.log("data.students_cart:", data.students_cart[1]);

    // console.log("Data:", data);
    try {
      for (let i = 0; i < data.students_cart.length; i++) {
        console.log("ITERATING");
        const response = await axios.put("/api/updateStudent", {
          id: stuRecIdArr[i],
          fields: data.students_cart[i],
        });
        console.log("Form submitted successfully:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const familyName = user.family_name;

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white">
      <>
        <p className="pt-10 pb-10"></p>
        <body>
          <div className="block sm:flex md:justify-center">
            <div>
              <div className="bg-secondary rounded-lg mx-10 my-6 p-11 text-center">
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-25 h-25"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p1 className="text-3xl">{familyName} Family</p1>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-4xl my-6 mx-10 md:mx-0 bg-secondary shadow-md rounded-lg p-10"
            >
              <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                  aria-current="page"
                >
                  <li class="mr-2" role="presentation">
                    <a href="/family-profile-page">
                      <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </button>
                    </a>
                  </li>
                  <li class="mr-2" role="presentation">
                    <a href="/student-profile-page">
                      <button
                        class="inline-block p-4 border-b-2 rounded-t-lg"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="true"
                      >
                        Students
                      </button>
                    </a>
                  </li>
                </ul>
              </div>

              <div id="myTabContent">
                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong class="font-medium text-gray-800 dark:text-white">
                      Profile tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>

                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong class="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
              </div>

              <div className="my-4">
                <div className="flex flex-col md:flex-row justify-between md:space-x-3"></div>
              </div>

              <div className="my-4">
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
                            htmlFor="Saint_Name"
                          >
                            Student's Saint Name:{" "}
                            <p className="text-red-500">*</p>
                          </label>

                          <input
                            placeholder="ex. St. Thomas Aquinas"
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="text"
                            name="Saint_Name"
                            id="Saint_Name"
                            {...register(`students_cart.${index}.Saint_Name`, {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                                message: "Invalid Saint name",
                              },
                            })}
                          />
                          {errors?.students?.[index]?.Saint_Name && (
                            <span className="text-red-500">
                              {errors.students[index].Saint_Name.message}
                            </span>
                          )}
                        </div>
                        <label
                          className="flex text-gray-200 font-medium mb-2"
                          htmlFor="First_Name"
                        >
                          Student's Name:<p className="text-red-500">*</p>
                        </label>
                        <div className="flex flex-col md:flex-row md:space-x-3">
                          <input
                            placeholder="First Name"
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="text"
                            name="First_Name"
                            id="First_Name"
                            {...register(`students_cart.${index}.First_Name`, {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/,
                                message: "Invalid Name",
                              },
                            })}
                          />

                          {errors?.students_cart?.[index]?.First_Name?.type ===
                            "required" && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}

                          {errors?.students_cart?.[index]?.First_Name && (
                            <span className="text-red-500">
                              {errors.students_cart[index].First_Name.message ||
                                "Invalid name"}
                            </span>
                          )}
                          <label
                            className="block text-gray-200 font-medium mb-2"
                            htmlFor="Last_Name"
                          ></label>
                          <input
                            placeholder="Last Name"
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="text"
                            name="Last_Name"
                            id="Last_Name"
                            {...register(`students_cart.${index}.Last_Name`, {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/,
                                message: "Invalid Name",
                              },
                            })}
                          />

                          {errors?.students_cart?.[index]?.Last_Name?.type ===
                            "required" && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}

                          {errors?.students_cart?.[index]?.Last_Name?.type ===
                            "pattern" && (
                            <span className="text-red-500">Invalid Name</span>
                          )}
                          {errors.Last_Name && (
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
                            Student's Date of Birth
                            <p className="text-red-500">*</p>
                          </label>
                          <input
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="date"
                            name="Birthday"
                            id="Birthday"
                            {...register(`students_cart.${index}.Birthday`, {
                              required: true,
                              pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: "Invalid Date",
                              },
                            })}
                          />

                          {errors?.students_cart?.[index]?.Birthday && (
                            <span className="text-red-500">
                              {errors.students_cart[index].Birthday.message ||
                                "This field is required"}
                            </span>
                          )}
                        </div>
                        <div className="my-4 text-gray-400">
                          <label
                            className="flex text-gray-200 font-medium mb-2"
                            htmlFor="Baptism_Date"
                          >
                            Student's Baptism Date
                            <p className="text-red-500">*</p>
                          </label>
                          <input
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="date"
                            name="Baptism_Date"
                            id="Baptism_Date"
                            {...register(
                              `students_cart.${index}.Baptism_Date`,
                              {
                                required: true,
                                pattern: {
                                  message: "Invalid Date",
                                },
                              }
                            )}
                          />
                          {errors?.students_cart?.[index]?.Baptism_Date && (
                            <span className="text-red-500">
                              {errors.students_cart[index].Baptism_Date
                                .message || "This field is required"}
                            </span>
                          )}
                        </div>
                        <div className="my-4 text-gray-400">
                          <label
                            className="block text-gray-200 font-medium mb-2"
                            htmlFor="First_Communion_Date"
                          >
                            Student's First Communion Date
                          </label>
                          <input
                            className="w-full border bg-tertiary border-fourth p-2 rounded"
                            type="date"
                            name="First_Communion_Date"
                            id="First_Communion_Date"
                            defaultValue={null}
                            {...register(
                              `students_cart.${index}.First_Communion_Date`,
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
                        <div className="flex flex-col items-end"></div>
                      </section>
                    </>
                  );
                })}

                <div className="my-4 flex justify-center">
                  <button
                    className="w-full bg-sky-800 text-white py-2 px-4 rounded-lg hover:bg-sky-900 font-bold text-lg shadow-lg"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
      </>
    </div>
  );
};

export default StudentProfile;
