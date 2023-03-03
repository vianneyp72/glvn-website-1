import React, { Component } from "react";
import axios from "axios";

let myData;
const displayConfirmationInfo = async (data) => {
  console.log("Data:", data);
  try {
    const response = await axios.get("/api/getParents", data);
    // console.log("Form submitted successfully:", response.data);
    // reset();
    myData = response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }

  let familyID = myData[1]["fields"]["Family_ID"],
    price = getPrice(myData[1]["fields"]["Price (from Students)"]),
    parent1Name =
      myData[1]["fields"]["pg1_first_name"] +
      " " +
      myData[1]["fields"]["pg1_last_name"],
    parent2Name =
      myData[1]["fields"]["pg2_first_name"] +
      " " +
      myData[1]["fields"]["pg2_last_name"];

  document
    .getElementById("div-test")
    .append(
      "Family ID: " + familyID + "\n",
      "Parents: " + parent1Name + " and " + parent2Name + "\n",
      "Students: placeholder" + "\n",
      "Price: $" + price + "\n"
    );
};

function getPrice(studentArray) {
  let total = 0;
  for (let i = 0; i < studentArray.length; i++) {
    total += studentArray[i];
  }
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function RegConfirmation() {
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
            DUE: "(date)"
            <br />
            Total Amount: "$Total"
          </p1>
          <br />
          <div className="border border-gray-700 mt-10 mb-10"></div>
          <a
            href="/family-profile-page"
            className="bg-fourth p-3 mt-3 rounded-md hover:bg-onhover shadow-lg"
          >
            Done!
          </a>
        </div>
      </div>
      <button onClick={displayConfirmationInfo}>button</button>
      <div
        id="div-test"
        className="whitespace-pre flex justify-center text-3xl font-bold"
      ></div>
    </div>
  );
}
