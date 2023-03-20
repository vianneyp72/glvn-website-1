import {
  studentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
  const {
    Family_ID,
    Grade,
    Saint_Name,
    First_Name,
    Last_Name,
    Birthday,
    Baptism_Date,
    First_Communion_Date,
  } = req.body;
  try {
    const createdRecords = await studentTable.create([
      {
        fields: {
          Family_ID,
          Grade,
          Saint_Name,
          First_Name,
          Last_Name,
          Birthday,
          Baptism_Date,
          First_Communion_Date,
        },
      },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
});
