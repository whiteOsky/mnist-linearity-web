'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Experiments", path: "/experiments" },
    { name: "Report", path: "/report" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-semibold">MNIST Linearity</div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-blue-400 transition-colors ${
              pathname === item.path ? "text-blue-400 font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
