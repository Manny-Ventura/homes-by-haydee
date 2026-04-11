'use client'

import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="w-full">
        <div className="flex hidden w-full justify-between p-4 md:flex">
          <div className="px-auto">
            <h3>Manny Ventura</h3>
          </div>
          <Link
            href="/"
            className="duration:150 hidden border-b-2 border-transparent text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--text-primary) md:flex"
          >
            Home
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--text-primary) md:flex"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--text-primary) md:flex"
            href="/about"
          >
            About
          </Link>
          <Link
            className="duration:150 hidden border-b-2 border-transparent text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--text-primary) md:flex"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center justify-between p-4 md:hidden">
          <h1>Manny Ventura</h1>
          <button
            className="mr-2 h-full justify-self-end md:hidden"
            onClick={toggleMenu}
          >
            {open ? <X size={44} /> : <Menu size={44} />}
          </button>
        </div>
        {open && (
          <div className="flex flex-col items-center">
            <a
              className="duration:150 w-full border-2 border-(--border) bg-(--surface) py-5 text-center transition-colors hover:bg-(--bg)"
              href="/"
            >
              Home
            </a>
            <a
              className="duration:150 w-full border-2 border-(--border) bg-(--surface) py-5 text-center transition-colors hover:bg-(--bg)"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="duration:150 w-full border-2 border-(--border) bg-(--surface) py-5 text-center transition-colors hover:bg-(--bg)"
              href="/about"
            >
              About
            </a>
            <a
              className="duration:150 w-full border-2 border-(--border) bg-(--surface) py-5 text-center transition-colors hover:bg-(--bg)"
              href="/contact"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
