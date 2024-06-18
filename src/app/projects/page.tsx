import Project from "@/components/Project";

export default function page() {
  return (
    <section className="max-w-screen-lg mx-auto my-12 p-5">
      <h1 className="text-3xl font-bold">Projects.</h1>
      <div className="grid grid-cols-2 mt-7 gap-12">
        <Project />
      </div>
    </section>
  );
}
