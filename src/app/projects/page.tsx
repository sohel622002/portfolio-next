import Project from "@/components/Project";
import { ProjectTypes } from "@/types/types";
import { getProjects } from "@/utils/getProjects";
import { sql } from "@vercel/postgres";

export default async function page() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <section className="max-w-screen-lg mx-auto my-12 p-5">
      <h1 className="text-3xl font-bold">Projects.</h1>
      <div className="grid grid-cols-2 mt-7 gap-12">
        {projects?.map((project) => (
          <Project data={project} />
        ))}
      </div>
    </section>
  );
}
