import React, { Component } from "react";
import axios from "axios";
import { parentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function RegConfirmation() {
  const { user } = useUser();
  console.log("USER: ", user);

  // let myData;

  // const displayConfirmationInfo = async (data) => {
  //   try {
  //     const response = await axios.get("/api/getParents", data);
  //     myData = response.data;
  //   } catch (error) {
  //     console.error("Error Getting Parents:", error);
  //   }

  //   let bigString = (await getInfo()).split("/");
  //   document
  //     .getElementById("information-container")
  //     .append(
  //       user.name + "\n\n",
  //       "Family ID: " + bigString[0] + "\n\n",
  //       "Total: $" +
  //         bigString[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
  //         "\n\n"
  //     );
  // };

  // function displayCost(input) {
  //   let cost = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return (
  //     <div id="cost-container" className="font-bold">
  //       ${cost}
  //     </div>
  //   );
  // }

  // const getInfo = async () => {
  //   const sub = user.sub;
  //   const records = await parentTable
  //     .select({
  //       filterByFormula: `{userid} = "${sub}"`,
  //     })
  //     .firstPage();
  //   let str =
  //     records[0].fields.Family_ID + "/" + records[0].fields.Total_Reg_Cost;
  //   console.log(str);
  //   return str;
  // };

  // useEffect(() => {
  //   displayConfirmationInfo();
  // }, []);

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white ">
      <p className="pt-10 pb-10 mb-10"></p>
      <div className="flex justify-center">
        <div className="bg-secondary shadow-lg p-10 rounded-lg w-2/3 sm:w-1/2 lg:w-1/3 text-center mb-4">
          <h3 className="font-bold text-4xl sm:text-6xl pb-3">Registered!</h3>
          <h3 className="text-xs pb-10 text-gray-300">
            Your submission has been received.
          </h3>
          <p1 className="text-primarytext text-sm sm:text-xl ">
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

            <div
              id="information-container"
              className="bg-gray-100 text-black rounded-md whitespace-pre"
            >
              <p className="whitespace-pre font-bold text-4xl mb-4 pt-4">
                Summary
              </p>
              <div className="border border-dashed border-gray-500 mb-10 mx-2" />
            </div>
          </p1>
          <br />

          <div className="text-center">
            <p className="font-bold text-gray-300 text-sm">
              Dưới sự yêu cầu của cha chánh xứ, Xin mỗi gia đình đóng góp $25 để
              giáo xứ có thể mướn người thu dọn trường học hàng tuần. By the
              request of our pastor, each family is asked to contribute
              $25/family to help the parish with the cost of cleaning the
              school.
            </p>
            <br />
            <br />
            <p className="font-bold text-white">
              Registration after May 8th will result in late fees of $20/child
            </p>
          </div>

          <div className="border border-gray-700 mb-10"></div>
          <a
            href="/family-profile-page"
            className="bg-fourth p-3 mt-3  rounded-md hover:bg-onhover shadow-lg"
          >
            Done!
          </a>
        </div>
      </div>
    </div>
  );
}
