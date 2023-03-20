import { studentTable, getMinifiedRecord } from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
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
});
