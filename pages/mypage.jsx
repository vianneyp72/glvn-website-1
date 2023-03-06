import ProfileTabs from "../components/ProfileTabs";
import { useUser, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  withApiAuthRequired(async function (req, res) {
    // const { user } = await auth0.getSession(req);
    try {
      const records = await parentTable.select({}).firstPage();
      const getMinifiedRecord = minifyRecords(records);
      res.statusCode = 200;
      res.json(getMinifiedRecord);

      console.log(res);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong" });
    }
  });

  return (
    <main>
      <ProfileTabs />
    </main>
  );
}
