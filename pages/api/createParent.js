import {
  parentTable,
  getMinifiedRecord,
  minifyRecords,
} from "./utils/airtable";
// import auth0 from './utils/auth0';
//wheeze number 2

export default async (req, res) => {
  // const { user } = await auth0.getSession(req);
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
};
