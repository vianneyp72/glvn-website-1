// import {
//   studentTable,
//   getMinifiedRecord,
//   minifyRecords,
// } from "./utils/airtable";

// export default withApiAuthRequired(async (req, res) => {
//   try {
//     const records = await studentTable.select({}).firstPage();
//     const getMinifiedRecord = minifyRecords(records);
//     res.statusCode = 200;
//     res.json(getMinifiedRecord);
//   } catch (error) {
//     console.error(error);
//     res.statusCode = 500;
//     res.json({ msg: "Something went wrong" });
//   }
// });
