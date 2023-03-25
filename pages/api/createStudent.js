import {
  studentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const handler = async (req, res) => {
  const session = getSession(req, res);
  if (!session) {
    res.status(401).json({ msg: "Unauthorized" });
    return;
  }

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
};

export default withApiAuthRequired(handler);
