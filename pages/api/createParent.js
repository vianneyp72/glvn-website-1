import { parentTable, getMinifiedRecord, minifyRecords } from './utils/airtable';
// import auth0 from './utils/auth0';

export default async (req, res) => {
    // const { user } = await auth0.getSession(req);
    const {Father_Name, Mother_Name} = req.body;
    try {
        const createdRecords = await parentTable.create([{fields: {Father_Name, Mother_Name}}]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};