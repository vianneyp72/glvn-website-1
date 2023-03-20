import React, { Component } from "react";
import axios from "axios";
import { parentTable } from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function RegConfirmation() {
  const { user } = useUser();
  let myData;

  const displayConfirmationInfo = async (data) => {
    try {
      const response = await axios.get("/api/getParents", data);
      myData = response.data;
    } catch (error) {
      console.error("Error Getting Parents:", error);
    }

    let bigString = (await getInfo()).split("/");
    document
      .getElementById("information-container")
      .append(
        "--------------------------------------------------------------------------------------\n\n" +
          user.name +
          "\n\n",
        "Family ID: " + bigString[0] + "\n\n",
        "Total: $" +
          bigString[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          "\n\n"
      );
  };

  function displayCost(input) {
    let cost = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
      <div id="cost-container" className="font-bold">
        ${cost}
      </div>
    );
  }

  const getInfo = async () => {
    const sub = user.sub;
    const records = await parentTable
      .select({
        filterByFormula: `{userid} = "${sub}"`,
      })
      .firstPage();
    let str =
      records[0].fields.Family_ID + "/" + records[0].fields.Total_Reg_Cost;
    console.log(str);
    return str;
  };

  useEffect(() => {
    displayConfirmationInfo();
  }, []);

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white ">
      <p className="pt-10 pb-10 mb-10"></p>
      <div className="flex justify-center">
        <div className="bg-secondary shadow-lg p-10 rounded-lg w-2/3 sm:w-1/2 lg:w-1/3 text-center">
          <h3 className="font-bold text-4xl sm:text-6xl pb-3">Registered!</h3>
          <h3 className="text-xs pb-10 text-gray-300">
            Your submission has been received.
          </h3>
          <p1 className="text-primarytext text-sm sm:text-xl ">
            <p1 className="text-md sm:text-2xl font-bold">Reminder:</p1>
            <br />
            Payment is Due by Cash or Check at the GLVN Office!
            <br />
            <br />
            <div
              id="information-container"
              className="bg-gray-100 text-black rounded-md whitespace-pre"
            >
              <p className="whitespace-pre font-bold text-4xl">Summary</p>
            </div>
          </p1>
          <br />
          <div className="border border-gray-700 mb-10"></div>
          <a
            href="/family-profile-page"
            className="bg-fourth p-3 mt-3 rounded-md hover:bg-onhover shadow-lg"
          >
            Done!
          </a>
        </div>
      </div>
    </div>
  );
}
