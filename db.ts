const { Pool } = require("pg");
require("dotenv").config();

export const pool = new Pool({
  connectionString:
    "postgres://default:XRbxAGyjVY94@ep-still-forest-a1zkuklp-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
});
