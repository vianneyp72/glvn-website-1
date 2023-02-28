import Airtable from "airtable";
Airtable.configure({
  apiKey: 'keyTOH4ki5YXyb5zp',
});
const base = Airtable.base('app425hlRFYnFnUEq');
const parentTable = base('FAMILIES');
const studentTable = base('STUDENTS');

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