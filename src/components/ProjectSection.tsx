import Link from "next/link";
import Projects from "./Projects";

export default async function ProjectSection() {
  return (
    <section className="max-w-screen-lg mx-auto my-12 p-5 gap-5">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-1">Projects</h2>
          <p className="test-sm font-semibold text-slate-500">
            Some of the side projects I worked on.
          </p>
        </div>
        <Link href={"/projects"} className="hover:underline font-semibold">
          See all projects
        </Link>
      </div>
      <Projects />
    </section>
  );
}
