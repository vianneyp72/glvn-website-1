import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, control, useFieldArray } from "react-hook-form";
import axios from "axios";
import { parentTable } from "../pages/api/utils/airtable";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useFirstRender } from "../utils/useFirstRender";
import { Alert } from "flowbite-react";

const RegForm = () => {
  const { user } = useUser();
  const [showAlert, setShowAlert] = useState(false);
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

  const firstRender = useFirstRender();
  useEffect(() => {
    if (firstRender) {
      append({});
    }
  }, []);

  const getRecordId = async () => {
    if (user) {
      const sub = user.sub;
      const records = await parentTable
        .select({
          filterByFormula: `{userID} = "${sub}"`,
        })
        .firstPage();
      return records.length > 0 ? records[0].id.toString() : null;
    }
  };

  const getFamID = async () => {
    if (user) {
      const sub = user.sub;
      const records = await parentTable
        .select({
          filterByFormula: `{userID} = "${sub}"`,
        })
        .firstPage();
      return records.length > 0 ? records[0]?.fields.Family_ID : null;
    }
  };

  const addStudentToFamily = async (arr) => {
    const result = await getRecordId();

    const response = await axios.put("/api/updateParent", {
      id: result,
      fields: { Students_Link: arr },
    });
  };

  const getExistingStudents = async () => {
    if (user) {
      const sub = user.sub;
      const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sub}"`,
        })
        .firstPage();
      return records.length > 0 ? records[0]?.fields.Students_Link : null;
    }
  };

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log("Data:", data);
    let existingStudentArray = [];
    let studentArray = [];

    existingStudentArray = await getExistingStudents();

    if (existingStudentArray != null) {
      for (let i = 0; i < existingStudentArray.length; i++) {
        studentArray.push(existingStudentArray[i]);
      }
    }
    for (let i = 0; i < data.students_cart.length; i++) {
      data.students_cart[i].Family_ID = await getFamID();
    }
    try {
      const responses = await Promise.all(
        data.students_cart.map((item) => axios.post("/api/createStudent", item))
      );
      for (let i = 0; i < responses.length; i++) {
        studentArray.push(responses[i].data.id);
      }
      addStudentToFamily(studentArray);
      setShowAlert(true);
      window.scrollTo(0, 0);
      console.log("Form submitted successfully:", responses);
      router.push("/registration-confirmation-page");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white">
      <>
        <p className="pt-10 pb-10"></p>

        <div className="flex justify-center">
          {showAlert && (
            <Alert>
              <div
                id="alert-border-1"
                class="flex p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  Your Family Profile has been Successfully updated.{" "}
                  <a
                    href="#"
                    class="font-semibold underline hover:no-underline"
                  >
                    Register Here!
                  </a>{" "}
                  Or click on the Register button above!
                </div>
              </div>
            </Alert>
          )}
        </div>

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
                        Student's Saint Name: <p className="text-red-500">*</p>
                      </label>

                      <input
                        placeholder="ex. St. Thomas Aquinas"
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        type="text"
                        name="Saint_Name"
                        id="Saint_Name"
                        {...register("Saint_Name", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                            message: "Invalid name",
                          },
                        })}
                      />
                      {errors.Saint_Name && (
                        <span className="text-red-500">
                          {errors.Saint_Name.message}
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
                        {...register("First_Name", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                            message: "Invalid name",
                          },
                        })}
                      />

                      {errors.First_Name && (
                        <span className="text-red-500">
                          {errors.First_Name.message}
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
                        {...register("Last_Name", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                            message: "Invalid name",
                          },
                        })}
                      />
                      {errors.Last_Name && (
                        <span className="text-red-500">
                          {errors.Last_Name.message}
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
                        {...register(`students_cart.${index}.Baptism_Date`, {
                          required: true,
                          pattern: {
                            message: "Invalid Date",
                          },
                        })}
                      />
                      {errors?.students_cart?.[index]?.Baptism_Date && (
                        <span className="text-red-500">
                          {errors.students_cart[index].Baptism_Date.message ||
                            "This field is required"}
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

            <div>
              <table className="table-fixed flex justify-center p-6 text-gray-200">
                <tbody>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lop 2 - First Communion
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $100.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lop 9 - Pre-Confirmation Retreat
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $150.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lop 10 - Confirmation Retreat
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $300.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Cleaning Fee (Per Family)
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $25.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">Late Fee</td>
                    <td className="border-4 border-gray-100 px-3">
                      + $20.00 per child
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default RegForm;
