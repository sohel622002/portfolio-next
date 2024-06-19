import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

async function getSingleProject(id: string) {
  "use server";
  revalidatePath("/");
  try {
    const projects = await sql`SELECT * FROM projects WHERE id = ${id};`;
    return projects.rows[0];
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }: PageProps) {
  const projectId = params.id;
  const project = await getSingleProject(projectId);

  if (!project) {
    return <p>Loading...</p>;
  }
  return (
    <section className="max-w-screen-lg mx-auto my-12 p-5 space-y-5">
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <Image
        src={project.image}
        alt="project image"
        width={1024}
        height={550}
        className="rounded-md w-full aspect-video object-cover shadow-xl border border-slate-300"
      />
      <p className="font-bold">Tech Stack used : {project.tech}</p>
      <p className="font-semibold">{project.description}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: project?.detail?.replace(/\n/g, "<br>"),
        }}
      ></p>
      <div className="space-x-5">
        <Link
          href={project.githublink}
          target="_blank"
          className="bg-slate-900 text-slate-200 px-5 py-3 rounded-sm text-sm font-semibold inline-block"
        >
          Github
        </Link>
        <Link
          href={project.liveat}
          target="_blank"
          className="border-2 border-slate-900 text-slate-900 px-5 py-3 rounded-sm text-sm font-semibold inline-block"
        >
          Live At
        </Link>
      </div>
    </section>
  );
}
