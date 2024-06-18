import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="space-y-2">
      <Image
        src={"/project-assets/project.jpg"}
        alt="project image"
        width={450}
        height={250}
        className="rounded-sm w-full aspect-video"
      />
      <h2 className="font-bold text-xl">Zyklo React App</h2>
      <p className="font-bold">HTML, CSS, JavaScript, React</p>
      <p className="line-clamp-3 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        quos recusandae architecto mollitia, voluptas officiis incidunt
        reprehenderit fugit consectetur assumenda. voluptas officiis incidunt
        reprehenderit fugit consectetur assumenda.
      </p>
      <div>
        <Link
          href={"/"}
          className="font-bold text-slate-800 inline-block border px-3 py-2 rounded-sm hover:bg-slate-800 hover:text-slate-100 transition"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
