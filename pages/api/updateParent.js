import { parentTable, getMinifiedRecord } from './utils/airtable';
// import auth0 from './utils/auth0';
//wheeze number 2

export default async (req, res) => {
    // const { user } = await auth0.getSession(req);
    const { id, fields } = req.body;
    const {Father_Name, Mother_Name, Phone_1, Phone_2, Email_1, Email_2, Street_Address, City_State_Zip, Students_Link} = req.body;
    try {
        const updatedRecord = await parentTable.update([{id, fields}]);
        res.statusCode = 200;
        res.json(getMinifiedRecord(updatedRecord));
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.json({ msg: 'Something went wrong' });
    }
};