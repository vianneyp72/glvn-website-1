import React, { useState } from "react";
import { parentTable, studentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function RegConfirmation() {
  const { user } = useUser();

  const { locale } = useRouter();
  const { t: translate } = useTranslation("confirmation");

  function formatMoney(input) {
    return (
      Math.round(input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") * 100) /
      100
    ).toFixed(2);
  }

  const [totalCost, setTotalCost] = useState();
  const [cleaningCost, setCleaningCost] = useState();
  const [famID, setFamID] = useState();
  const [studentArray, setStudentArray] = useState([]);

  async function fetchParentData() {
    const records = await parentTable
      .select({
        filterByFormula: `{userID} = "${user.sub}"`,
      })
      .firstPage();
    setFamID(records[0].fields.Family_ID);
    setTotalCost(formatMoney(records[0].fields.Total_Reg_Cost));
    setCleaningCost(formatMoney(records[0].fields.Cleaning_Fee));
  }

  async function fetchStudentData() {
    const records = await studentTable
      .select({
        filterByFormula: `{userID} = "${user.sub}"`,
      })
      .firstPage();
    let newStudentArray = [];
    for (let i = 0; i < records.length; i++) {
      newStudentArray.push(records[i]);
    }
    setStudentArray(newStudentArray);
  }

  useEffect(() => {
    fetchParentData();
    fetchStudentData();
  }, [totalCost, cleaningCost, famID, studentArray]);

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white ">
      <p className="pt-10 pb-10 mb-10"></p>
      <div className="flex justify-center">
        <div className="bg-secondary shadow-lg p-10 rounded-lg w-5/6 sm:w-3/4 m:w-1/2 lg:w-1/2 mb-4">
          <h3 className="flex justify-center font-bold text-4xl sm:text-6xl pb-3">
            {translate("Registered")}!
          </h3>
          <h3 className="flex justify-center text-xs pb-10 text-gray-300">
            {translate("Your submission has been received")}.
          </h3>
          <p1 className="text-primarytext text-sm sm:text-xl ">
            <h2 className="text-lg font-bold bg-fourth p-4 rounded-lg shadow-md text-primarytext mb-3">
              {translate("Payment Information")}
            </h2>
            <div className="text-center space-y-5 text-gray-200">
              <p>
                {translate(
                  "After submitting this form, please visit the GLVN office to pay for registration fees to complete registration for your children"
                )}
                .
              </p>
              <p className="text-3xl font-bold text-white">
                {translate("Registration Fee")}: $130
              </p>
              <p>
                {translate(
                  "All students pay $130 for the general GLVN program. Additional fees are required for the following grades to cover special programming for Sacramental Preparation"
                )}
                .
              </p>
            </div>
            <div>
              <table className="table-fixed flex justify-center p-6 text-gray-200">
                <tbody>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lớp 2 - {translate("First Communion")}
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $100.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lớp 9 - {translate("Pre-Confirmation Retreat")}
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $175.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      Lớp 10 - {translate("Confirmation Retreat")}
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $300.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      {translate("Cleaning Fee (Per Family)")}
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $25.00</td>
                  </tr>
                  <tr>
                    <td className="border-4 border-gray-100 px-3">
                      {translate("Late Fee (Per Child)")}
                    </td>
                    <td className="border-4 border-gray-100 px-3">+ $20.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center">
              <div
                id="information-container"
                className="bg-gray-100 text-black rounded-md whitespace-pre px-6 pt-4 shadow-xl w-full md:w-2/3"
              >
                <div className="flex justify-between">
                  <div
                    id="family-container"
                    className="flex justify-start pt-10 font-bold text-2xl"
                  >
                    {user.family_name} Family
                  </div>
                  <div
                    id="family-id-container"
                    className="flex justify-start pt-10"
                  >
                    FamilyID: {famID}
                  </div>
                </div>
                <p
                  id="thanks-container"
                  className="flex justify-start pt-5 text-onhover small:text-sm sm:text-2xl font-bold"
                >
                  {translate("Thanks for Registering")}
                </p>
                <p className="whitespace-pre text-xl mb-4 pt-4 text-blue-900">
                  {translate("Payment Summary")}
                </p>
                <div className="border border-dashed border-gray-500 mb-10" />
                {/*fix padding pls*/}

                <div>
                  {studentArray.map((student, index) => (
                    <div
                      key={student.id}
                      className="flex justify-between text-md xs:text-md sm:text-xl font-bold py-2"
                    >
                      <p className="font-bold">
                        {translate("Student")} {index + 1} (
                        {student.fields.Grade})
                      </p>
                      <p>${formatMoney(student.fields.Grade_Price)}</p>
                    </div>
                  ))}
                </div>

                <div id="misc-container" className="flex justify-between">
                  <div id="left-side-container" className="text-sm">
                    {translate("Cleaning Fee")}
                  </div>
                  <div id="right-side-container">${cleaningCost}</div>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between text-lg xs:text-lg sm:text-2xl lg:text-4xl mb-3 pt-3">
                    <div id="string-total-container" className="font-bold">
                      {translate("Total")}
                    </div>
                    <div
                      id="number-total-container"
                      className="font-bold text-onhover"
                    >
                      ${totalCost}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </p1>
          <br />

          <div className="text-center">
            <br />
            <br />
          </div>

          <div className="border border-gray-700 mb-10"></div>
          <Link
            href="/family-profile-page"
            className="flex justify-center bg-fourth p-3 mt-3 rounded-md hover:bg-onhover shadow-lg"
          >
            {translate("Done!")}
          </Link>
        </div>
      </div>
    </div>
  );
}
