import ProjectSection from "@/components/ProjectSection";
import { TECHSTACK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex max-w-screen-lg mx-auto my-12 p-5 gap-5">
        <div className="sm:flex-[0.7]">
          <h1 className="sm:text-3xl text-2xl font-bold">
            Hello! I am Sohel, a web developer living in Ahmedabad.
          </h1>
          <div className="space-y-3 mt-5 text-slate-500 font-semibold">
            <p>
              I enjoy creating tools that are easy to use, straightforward , and
              enjoyable.
            </p>
            <p>
              I had a degree in physics, but a year after I graduated, I became
              interested in web programming and studied it.
            </p>
            <p>
              I have eight months of experience working as a freelance
              developer, so I can put my knowledge to use in practical settings.
            </p>
            <p>Want to hire web developer?</p>
          </div>
          <div className="space-x-4 mt-7">
            <Link
              href={"https://www.linkedin.com/in/sohelshaikh0602/"}
              target="_blank"
              className="bg-slate-900 text-slate-200 px-5 py-3 rounded-sm text-sm font-semibold inline-block"
            >
              View Linkedin
            </Link>
            <Link
              href={"https://github.com/sohel622002"}
              target="_blank"
              className="border-2 border-slate-900 text-slate-900 px-5 py-3 rounded-sm text-sm font-semibold inline-block"
            >
              View Github
            </Link>
          </div>
        </div>
        <div className="sm:flex-[0.3] sm:block hidden">
          <Image
            src={"/prfile.jpg"}
            alt="profile image"
            width={350}
            height={450}
            className="w-full aspect-[1/1.5] object-cover rounded-md"
          />
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto my-12 p-5">
        <h2 className="text-2xl font-bold mb-1">Tech i know</h2>
        <div className="flex gap-5 mt-5 flex-wrap">
          {TECHSTACK.map((tech) => (
            <Image
              key={tech}
              src={`/techs/${tech}.svg`}
              width={50}
              height={50}
              alt={tech + " icon"}
              draggable={false}
              className="h-[50px] object-contain"
            />
          ))}
        </div>
      </section>
      <ProjectSection />
      <section className="max-w-screen-lg mx-auto my-12 p-5">
        <h2 className="text-2xl font-bold mb-1">Get in touch</h2>
        <p className="font-semibold">
          Do you have a job opportunity or idea you'd like to discuss? Feel free
          to reach me at{" "}
          <span className="text-rose-600">sohelshaikh01231@gmail.com</span>. You
          can also find me on{" "}
          <Link
            href={"https://github.com/sohel622002"}
            target="_blank"
            className="text-rose-600"
          >
            Github
          </Link>{" "}
          and{" "}
          <Link
            href={"https://www.linkedin.com/in/sohelshaikh0602/"}
            target="_blank"
            className="text-rose-600"
          >
            Linkdin
          </Link>
          . Or you can drop me a message from{" "}
          <Link href={"/contact"} className="text-rose-600">
            here
          </Link>
          .
        </p>
      </section>
    </>
  );
}
