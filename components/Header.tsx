"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";




export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        if (!hideTimeout.current) {
          hideTimeout.current = setTimeout(() => setHidden(true), 150);
        }
      } else {
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const linkClass = (path: string) =>
    `transition-colors ${pathname === path ? "underline underline-offset-4" : ""
    }`;

  return (
    

    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-200 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="px-6 md:px-10 py-5 md:py-6">
        <div className="flex justify-between items-center">

          
          <button
            className="md:hidden order-1 text-green-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link
            href="/"
            className="text-2xl md:text-3xl font-semibold order-2 md:order-1 text-green-900"
          >
            Lilac Template
          </Link>


         
          <nav className="hidden md:flex space-x-8 text-lg order-3 text-green-900">
            <a href="/blog" className={linkClass("/blog")}>
              Blog
            </a>
            <a href="/contact" className={linkClass("/contact")}>
              Contact
            </a>
          </nav>
        </div>

       
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${open ? "max-h-60 opacity-100 mt-8" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col items-center space-y-6 text-2xl py-4 text-green-900">
            <a
              href="/blog"
              className={linkClass("/blog")}
              onClick={() => setOpen(false)}
            >
              Blog
            </a>
            <a
              href="/contact"
              className={linkClass("/contact")}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>


  );
}
