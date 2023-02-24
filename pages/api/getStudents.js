import {
  studentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";
// import auth0 from './utils/auth0';

export default async (req, res) => {
  // const { user } = await auth0.getSession(req);
  try {
    const records = await studentTable.select({}).firstPage();
    const getMinifiedRecord = minifyRecords(records);
    res.statusCode = 200;
    res.json(getMinifiedRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
