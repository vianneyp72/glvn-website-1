// import { parentTable, getMinifiedRecord } from "./utils/airtable";
// import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

// const handler = async (req, res) => {
//   const session = getSession(req, res);
//   if (!session) {
//     res.status(401).json({ msg: "Unauthorized" });
//     return;
//   }
//   const { id } = req.body;
//   try {
//     const deletedRecords = await parentTable.destroy([id]);
//     res.statusCode = 200;
//     res.json(getMinifiedRecord(deletedRecords[0]));
//   } catch (error) {
//     console.error(error);
//     res.statusCode = 500;
//     res.json({ msg: "Something went wrong" });
//   }
// };

// export default withApiAuthRequired(handler);
