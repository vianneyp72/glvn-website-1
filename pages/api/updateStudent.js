import { studentTable, getMinifiedRecord } from "./utils/airtable";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const handler = async (req, res) => {
  const session = getSession(req, res);
  if (!session) {
    res.status(401).json({ msg: "Unauthorized" });
    return;
  }
  const { id, fields } = req.body;
  try {
    const updatedRecords = await studentTable.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
export default withApiAuthRequired(handler);
