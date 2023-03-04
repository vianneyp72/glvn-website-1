import React, { Component } from "react";
import axios from "axios";
import {parentTable} from "../pages/api/utils/airtable";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function RegConfirmation() {

  let myData;
  const displayConfirmationInfo = async (data) => {
    const recID = await getRecordId();

    try {
      const response = await axios.get("/api/getParents", data);

      myData = response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
    }

      let familyID = await getFamilyID(),
          cost = await getRegCost(),
          parent1Name = await getParent1First() + " " + await getParent1Last(),
          parent2Name = await getParent2First() + " " + await getParent2Last()
      document.getElementById("information-container").append(
          "Due: (due date here)" + "\n",
          "Family ID: " + familyID + "\n",
          "Parents: " + parent1Name + " and " + parent2Name + "\n",
          "Price: $" + cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
  };

  const getFamilyID = async () => {
    const sid = user.sid;
    const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sid}"`,
        })
        .firstPage();
    return records.length > 0 ? records[0].fields.Family_ID : null;
  };

  const getRegCost = async () => {
    const sid = user.sid;
    const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sid}"`,
        })
        .firstPage();
    return records.length > 0 ? records[0].fields.Total_Reg_Cost : null;
  };

  const getParent1First = async () => {
    const sid = user.sid;
    const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sid}"`,
        })
        .firstPage();
    return records.length > 0 ? records[0].fields.pg1_first_name : null;
  };

  const getParent1Last = async () => {
      const sid = user.sid;
      const records = await parentTable
          .select({
              filterByFormula: `{userid} = "${sid}"`,
          })
          .firstPage();
      return records.length > 0 ? records[0].fields.pg1_last_name : null;
  };

  const getParent2First = async () => {
    const sid = user.sid;
    const records = await parentTable
        .select({
          filterByFormula: `{userid} = "${sid}"`,
        })
        .firstPage();
    return records.length > 0 ? records[0].fields.pg2_first_name : null;
  };

  const getParent2Last = async () => {
      const sid = user.sid;
      const records = await parentTable
          .select({
              filterByFormula: `{userid} = "${sid}"`,
          })
          .firstPage();
      return records.length > 0 ? records[0].fields.pg2_last_name : null;
  };

  const { user } = useUser();

  const getRecordId = async () => {
    if (user) {
      const sid = user.sid;
      const records = await parentTable
          .select({
            filterByFormula: `{userid} = "${sid}"`,
          })
          .firstPage();
      return records.length > 0 ? records[0].id.toString() : null;
    }
  };

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
              <br/>
              <br/>
              <div
                  id="information-container"
                  className="whitespace-pre"></div>
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
      <button onClick={displayConfirmationInfo}>button</button>
    </div>
  );
}
