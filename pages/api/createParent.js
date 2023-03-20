import {
  parentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
  const {
    pg1_first_name,
    pg1_last_name,
    pg2_first_name,
    pg2_last_name,
    pg1_phone,
    pg2_phone,
    pg1_email,
    pg2_email,
    street_address,
    city,
    state,
    zipcode,
    Students_Link,
    userID,
  } = req.body;
  try {
    const createdRecords = await parentTable.create([
      {
        fields: {
          pg1_first_name,
          pg1_last_name,
          pg2_first_name,
          pg2_last_name,
          pg1_phone,
          pg2_phone,
          pg1_email,
          pg2_email,
          street_address,
          city,
          state,
          zipcode,
          Students_Link,
          userID,
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
});
