"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <header className="py-6 bg-[url('/cover.jpg')] bg-cover bg-center">
    <header className="py-6 bg-[#2F476D] bg-cover bg-center">
      <div className="mx-auto max-w-screen-xl container">
        <div className="flex h-16 items-center justify-between">
          {/* اللوجو */}
          <div className="flex items-center gap-4">
            <Link prefetch={true} className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-2xl z-10">
                  <Image
                    className="z-10 object-contain"
                    src="/logo.png"
                    alt="شعار الموقع"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
              </div>
            </Link>
          </div>
          {/* <ThemeToggle /> */}
          {/* أيقونة القائمة */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 transform rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 transform transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* القائمة تظهر في الشاشات الكبيرة */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm font-bold font-arabic">
                <li>
                  <Link
                    prefetch={true}
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    href="/about-us"
                    className="text-white transition hover:text-gray-500/75 text-xl"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={true}
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    href="/projects"
                  >
                    مشاريعنا
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/966553810363"
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* قائمة الهواتف تظهر في الشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="md:hidden  p-4">
          <nav aria-label="Global">
            <ul className="flex flex-col text-base items-end font-bold gap-4">
              <li>
                <Link
                  prefetch={true}
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                  onClick={closeMenu}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  className="text-white transition hover:text-gray-500/75"
                  href="/about-us"
                  onClick={closeMenu}
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-gray-500/75"
                  href="/projects"
                  prefetch={true}
                  onClick={closeMenu}
                >
                  مشاريعنا
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/966553810363"
                  className="text-white transition hover:text-gray-500/75"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
