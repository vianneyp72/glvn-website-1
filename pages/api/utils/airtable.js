import Airtable from "airtable";
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const parentTable = base(process.env.AIRTABLE_PARENT_TABLE_NAME);
const studentTable = base(process.env.AIRTABLE_STUDENT_TABLE_NAME);

const getMinifiedRecord = (record) => {
  if (!record.fields.completed) {
    record.fields.completed = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export { parentTable, studentTable, getMinifiedRecord, minifyRecords };
