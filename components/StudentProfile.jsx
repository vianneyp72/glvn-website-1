import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useForm, control, useFieldArray } from "react-hook-form";
import axios from "axios";
import { parentTable, studentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFirstRender } from "../utils/useFirstRender";

const RegForm = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
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
          stuRecArr.push(records[i].id.toString());
        }
      }
    };
    let stuRecArr = [];
    getRecordId();

    console.log("stuRecArr:", stuRecArr[0]);
    console.log("data.students_cart:", data.students_cart[1]);

    console.log("Data:", data);
    try {
      for (let i = 0; i < stuRecArr.length; i++) {
        console.log("ITERATING");
        const response = await axios.put("/api/updateStudent", {
          id: stuRecArr[i],
          fields: data.students_cart[i],
        });
        console.log("Form submitted successfully:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white">
      <>
        <p className="pt-10 pb-10"></p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-4xl my-6 bg-secondary shadow-md rounded-lg p-10"
        >
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
      </>
    </div>
  );
};

export default RegForm;
