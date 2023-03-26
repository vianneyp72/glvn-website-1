/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: false,
  i18n,
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_PARENT_TABLE_NAME: process.env.AIRTABLE_PARENT_TABLE_NAME,
    AIRTABLE_STUDENT_TABLE_NAME: process.env.AIRTABLE_STUDENT_TABLE_NAME,
  },
};

reactStrictMode: true, (module.exports = nextConfig);
