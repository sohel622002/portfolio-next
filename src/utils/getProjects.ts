import { sql } from "@vercel/postgres";

export async function getProjects() {
  try {
    const projects = await sql`SELECT * FROM projects;`;
    return projects.rows;
  } catch (error) {
    console.log(error);
  }
}
