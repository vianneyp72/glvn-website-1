import { parentTable, getMinifiedRecord } from './utils/airtable';
// import auth0 from './utils/auth0';
//wheeze number 2

export default async (req, res) => {
    // const { user } = await auth0.getSession(req);
    const { Family_ID, fields } = req.body;
    try {
        const updatedRecords = await parentTable.update([{Family_ID, fields}]);
        res.statusCode = 200;
        res.json(getMinifiedRecord(updatedRecords[0]));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};