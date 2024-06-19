import Projects from "@/components/Projects";

export default async function page() {
  return (
    <section className="max-w-screen-lg mx-auto my-12 p-5">
      <h1 className="text-3xl font-bold">Projects.</h1>
      <Projects />
    </section>
  );
}
