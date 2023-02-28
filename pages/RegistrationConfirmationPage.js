import axios from "axios";

let myData
const displayConfirmationInfo = async (data) => {
    console.log("Data:", data);
    try {
        const response = await axios.get("/api/getParents", data);
        // console.log("Form submitted successfully:", response.data);
        // reset();
        myData = response.data
    } catch (error) {
        console.error("Error submitting form:", error);
    }



    let familyID = myData[1]["fields"]["Family_ID"],
        price = getPrice(myData[1]["fields"]["Price (from Students)"]),
        parent1Name = myData[1]["fields"]["pg1_first_name"] + " " + myData[1]["fields"]["pg1_last_name"],
        parent2Name = myData[1]["fields"]["pg2_first_name"] + " " + myData[1]["fields"]["pg2_last_name"]

    document.getElementById("div-test").append("Family ID: " + familyID + "\n",
        "Parents: " + parent1Name + " and " + parent2Name + "\n",
        "Students: placeholder" + "\n",
        "Price: $" + price + "\n",);
};

function getPrice(studentArray) {
    let total = 0;
    for (let i = 0; i < studentArray.length; i++) {
        total += studentArray[i];
    }
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function RegistrationConfirmationPage() {
    return (
        <main>
            <button onClick={displayConfirmationInfo}>button</button>
            <div id="div-test" className="whitespace-pre flex justify-center text-3xl font-bold">

            </div>
        </main>

    )
}