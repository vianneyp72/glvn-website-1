import React, { useCallback, useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { parentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Alert } from "flowbite-react";

const FamProfile = () => {
  const { user } = useUser();

  const [showAlert, setShowAlert] = useState(false);

  const [fields, setFields] = useState({
    pg1_first_name: "",
    pg1_last_name: "",
    pg1_phone: "",
    pg1_email: "",
    pg2_first_name: "",
    pg2_last_name: "",
    pg2_phone: "",
    pg2_email: "",
    street_address: "",
    state: "",
    city: "",
    zipcode: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const resetForm = useCallback(() => {
    reset({
      pg1_first_name: fields?.pg1_first_name || "",
      pg1_last_name: fields?.pg1_last_name || "",
      pg1_phone: fields?.pg1_phone || "",
      pg1_email: fields?.pg1_email || "",
      pg2_first_name: fields?.pg2_first_name || "",
      pg2_last_name: fields?.pg2_last_name || "",
      pg2_phone: fields?.pg2_phone || "",
      pg2_email: fields?.pg2_email || "",
      street_address: fields?.street_address || "",
      state: fields?.state || "",
      city: fields?.city || "",
      zipcode: fields?.zipcode || "",
    });
  }, [
    fields?.pg1_first_name,
    fields?.pg1_last_name,
    fields?.pg1_phone,
    fields?.pg1_email,
    fields?.pg2_first_name,
    fields?.pg2_last_name,
    fields?.pg2_phone,
    fields?.pg2_email,
    fields?.street_address,
    fields?.state,
    fields?.city,
    fields?.zipcode,
    reset,
  ]);

  useEffect(() => {
    // when profile is loaded, set the form values
    resetForm();
  }, [user, fields, resetForm]);

  useEffect(() => {
    const getFamInfo = async () => {
      if (user) {
        const sub = user.sub;
        const records = await parentTable
          .select({
            filterByFormula: `{userid} = "${sub}"`,
          })
          .firstPage();
        setFields(records[0]?.fields);
        return records;
      }
    };

    getFamInfo();
  }, [user]);

  const getRecordId = async () => {
    if (user) {
      const sub = user.sub;
      const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sub}"`,
        })
        .firstPage();
      return records.length > 0 ? records[0].id.toString() : null;
    }
  };

  const onSubmit = async (data) => {
    console.log("Data:", data);
    try {
      const result = await getRecordId();
      const response = await axios.put("/api/updateParent", {
        id: result,
        fields: data,
      });
      setShowAlert(true);
      window.scrollTo(0, 0);
      console.log(result);
      console.log("result", result);
      console.log("data", data);
      console.log("Updated successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function formatPhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) {
      input.value = phoneNumber;
    } else if (phoneNumberLength < 7) {
      input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  }

  const familyName = user.family_name;

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

        <body>
          <div className="block sm:flex md:justify-center">
            <div>
              <div className="bg-secondary rounded-lg mx-10 my-6 p-11 text-center">
                <div>
                  <div>
                    <div>
                      {/* <img src={user.picture} alt="Profile picture" /> */}
                    </div>
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
                    <button
                      class="inline-block p-4 border-b-2 rounded-t-lg"
                      id="profile-tab"
                      data-tabs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>
                  <li class="mr-2" role="presentation">
                    <a href="/student-profile-page">
                      <button
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
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
                    {errors.pg1_first_name && (
                      <span className="text-red-500">
                        {errors.pg1_first_name.message}
                      </span>
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
                          value:
                            /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                          message: "Invalid last name",
                        },
                      })}
                    />
                    {errors.pg1_last_name && (
                      <span className="text-red-500">
                        {errors.pg1_last_name.type === "required"
                          ? "This field is required"
                          : "Invalid last name"}
                      </span>
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
                  onInput={(e) => formatPhoneNumber(e.target)}
                  {...register("pg1_phone", {
                    required: true,
                    pattern: {
                      value:
                        /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([0-9]{3})\s*\)|([0-9]{3}))\s*(?:[.-]\s*)?([0-9]{3})\s*(?:[.-]\s*)?([0-9]{4}))$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.pg1_phone && (
                  <span className="text-red-500">
                    {errors.pg1_phone.type === "required"
                      ? "This field is required"
                      : "Invalid phone number"}
                  </span>
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
                  <span className="text-red-500">
                    {errors.pg1_email.type === "required"
                      ? "This field is required"
                      : "Invalid email address"}
                  </span>
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
                          value:
                            /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                          message: "Invalid first name",
                        },
                      })}
                    />
                    {errors.pg2_first_name && (
                      <span className="text-red-500">
                        {errors.pg2_first_name.type === "required"
                          ? "This field is required"
                          : errors.pg2_first_name.message}
                      </span>
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
                        required: false,
                        pattern: {
                          value:
                            /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ -]+$/i,
                          message: "Invalid last name",
                        },
                      })}
                    />
                    {errors.pg2_last_name && (
                      <span className="text-red-500">
                        {errors.pg2_last_name.message}
                      </span>
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
                  onInput={(e) => formatPhoneNumber(e.target)}
                  {...register("pg2_phone", {
                    required: false,
                    pattern: {
                      value:
                        /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([0-9]{3})\s*\)|([0-9]{3}))\s*(?:[.-]\s*)?([0-9]{3})\s*(?:[.-]\s*)?([0-9]{4}))$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.pg2_phone && (
                  <p className="text-red-500">
                    {errors.pg2_phone.type === "required"
                      ? "This field is required"
                      : errors.pg2_phone.message}
                  </p>
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
                {errors.pg2_email && errors.pg2_email.type === "pattern" && (
                  <p className="text-red-500">{errors.pg2_email.message}</p>
                )}
                {errors.pg2_email && errors.pg2_email.type === "required" && (
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
                        message: "Invalid street address",
                      },
                    })}
                  />
                  {errors.street_address &&
                    errors.street_address.type === "pattern" && (
                      <p className="text-red-500">
                        {errors.street_address.message}
                      </p>
                    )}
                  {errors.street_address &&
                    errors.street_address.type === "required" && (
                      <p className="text-red-500">
                        {errors.street_address.message}
                      </p>
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
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value: /^[A-Za-z. ]+$/i,
                            message: "Invalid city name",
                          },
                        })}
                      />
                      {errors.city && errors.city.type === "pattern" && (
                        <span className="text-red-500">
                          {errors.city.message}
                        </span>
                      )}
                      {errors.city && errors.city.type === "required" && (
                        <span className="text-red-500">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                    <div className="w-full">
                      <label
                        className="flex text-gray-200 font-medium mb-2"
                        htmlFor="City"
                      >
                        State:<p className="text-red-500">*</p>
                      </label>

                      <select
                        className="w-full border bg-tertiary border-fourth p-2 rounded"
                        id="state"
                        {...register("state", { required: true })}
                        required
                      >
                        <option value="">Select a state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                      {errors.state && (
                        <span className="text-red-500">
                          This field is required
                        </span>
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
                          pattern: {
                            value: /^[\s*\d{5}(-\d{4})?\s*$]/i,
                            message: "invalid zipcode",
                            required: true,
                          },
                        })}
                      />
                      {errors.zipcode && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="border mt-10 border-gray-700"></div>
                  <div className="my-4 flex mt-5 justify-between">
                    <button
                      className="bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-900 font-bold text-lg shadow-lg ml-3"
                      type="submit"
                    >
                      Update
                    </button>

                    <button
                      className="bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-900 font-bold text-lg shadow-lg ml-3"
                      onClick={() => {
                        resetForm();
                      }}
                    >
                      Discard Changes
                    </button>
                  </div>
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

export default FamProfile;
