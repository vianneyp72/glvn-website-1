import { parentTable, getMinifiedRecord } from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
  const { id, fields } = req.body;
  try {
    const updatedRecords = await parentTable.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
});
