import {
  parentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";
import { useUser, withApiAuthRequired } from "@auth0/nextjs-auth0";
// import auth0 from './utils/auth0';

const checkUserId = async (sub) => {
  const records = await parentTable
    .select({
      filterByFormula: `{userID} = "${sub}"`,
    })
    .firstPage();
  console.log("ALERT:", records[0].fields.userID);
  return records[0].fields.userID;
};

export default withApiAuthRequired(async function (req, res) {
  // const { user } = await auth0.getSession(req);
  try {
    const records = await parentTable.select({}).firstPage();
    const getMinifiedRecord = minifyRecords(records);
    res.statusCode = 200;
    res.json(getMinifiedRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
});
