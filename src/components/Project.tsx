import Image from "next/image";
import Link from "next/link";

export default function Project({ data }: { data: any }) {
  return (
    <div className="space-y-2">
      <Image
        src={data.image}
        alt="project image"
        width={450}
        height={250}
        className="rounded-md w-full aspect-video object-cover shadow-xl border border-slate-300"
      />
      <h2 className="font-bold text-xl">{data.name}</h2>
      <p className="font-bold">{data.tech}</p>
      <p className="line-clamp-3 text-justify">{data.description}</p>
      <div>
        <Link
          href={`/projects/${data.id}`}
          className="font-bold text-slate-800 inline-block border px-3 py-2 rounded-sm hover:bg-slate-800 hover:text-slate-100 transition"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
