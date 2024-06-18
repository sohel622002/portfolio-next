"use client";

import { HEADERLINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="max-w-screen-lg mx-auto p-5 flex items-center justify-between">
      <h2 className="text-xl font-bold">SOHEL.DEV</h2>
      <nav className="space-x-10 font-bold">
        {HEADERLINKS.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={`${pathName == link.link ? "text-rose-700" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
