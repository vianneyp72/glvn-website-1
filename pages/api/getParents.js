// import {
//   parentTable,
//   getMinifiedRecord,
//   minifyRecords,
// } from "./utils/airtable";
// import { useUser, withApiAuthRequired } from "@auth0/nextjs-auth0";

// export default withApiAuthRequired(async function (req, res) {
//   try {
//     const records = await parentTable.select({}).firstPage();
//     const getMinifiedRecord = minifyRecords(records);
//     res.statusCode = 200;
//     res.json(getMinifiedRecord);
//   } catch (error) {
//     console.error(error);
//     res.statusCode = 500;
//     res.json({ msg: "Something went wrong" });
//   }
// });
