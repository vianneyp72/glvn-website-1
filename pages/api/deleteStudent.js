import { studentTable, getMinifiedRecord } from "./utils/airtable";
// import auth0 from './utils/auth0';

export default async (req, res) => {
  // const { user } = await auth0.getSession(req);
  const { id } = req.body;
  try {
    const deletedRecords = await studentTable.destroy([id]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
