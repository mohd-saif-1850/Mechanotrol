"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClasses = (path: string) =>
    pathname === path || (path !== "/" && pathname?.startsWith(path))
      ? "text-black font-semibold pb-1 border-b-2 border-[#FF6A00]"
      : "text-gray-800 hover:text-orange-400 font-medium";

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/mechano.png"
            alt="Mechanotrol Logo"
            width={160}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {!session?.user?._id && (
            <>
              <Link href="/" className={linkClasses("/")}>Home</Link>
              <Link href="/services" className={linkClasses("/services")}>Services</Link>
              <Link href="/about" className={linkClasses("/about")}>About Us</Link>
              <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
              <Link
                href="/login"
                className="px-4 py-2 rounded-md font-medium text-white"
                style={{ background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)" }}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 hover:bg-orange-400 rounded-md border border-gray-300 font-medium text-gray-900"
              >
                Register
              </Link>
            </>
          )}

          {session?.user?._id && (
            <>
              <Link href="/" className={linkClasses("/")}>Home</Link>
              <Link href="/services" className={linkClasses("/services")}>Services</Link>
              <Link href="/about" className={linkClasses("/about")}>About Us</Link>
              <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
              <Link
                href="/profile"
                className="px-4 py-2 rounded-md font-medium text-white"
                style={{ background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)" }}
              >
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="
                  relative px-6 py-2.5 rounded-xl font-semibold text-white 
                  bg-gradient-to-br from-red-500 via-red-600 to-red-700
                  shadow-[0_0_15px_rgba(255,0,0,0.5)]
                  hover:shadow-[0_0_25px_rgba(255,60,60,0.8)]
                  hover:scale-[1.08] cursor-pointer
                  transition-all duration-300 ease-out
                  overflow-hidden
                "
              >
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r 
                    from-transparent via-white/20 to-transparent 
                    opacity-0 hover:opacity-100 
                    translate-x-[-100%] hover:translate-x-[100%] 
                    transition-all duration-700
                  "
                ></span>

                <span className="relative z-10 tracking-wide">Logout</span>
              </button>

            </>
          )}
        </nav>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6A00]"
        >
          <span className="sr-only">Toggle menu</span>
          {!open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-200 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
          aria-hidden={!open}
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative max-w-md w-full bg-white h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                <Image
                  src="/mechano.png"
                  alt="Mechanotrol Logo"
                  width={140}
                  height={45}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6A00]"
              >
                <span className="sr-only">Close menu</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {!session?.user?._id && (
                <>
                  <Link href="/" ref={firstLinkRef} onClick={() => setOpen(false)} className={linkClasses("/") + " text-lg"}>Home</Link>
                  <Link href="/services" onClick={() => setOpen(false)} className={linkClasses("/services") + " text-lg"}>Services</Link>
                  <Link href="/about" onClick={() => setOpen(false)} className={linkClasses("/about") + " text-lg"}>About Us</Link>
                  <Link href="/contact" onClick={() => setOpen(false)} className={linkClasses("/contact") + " text-lg"}>Contact</Link>

                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="mt-4 px-4 py-3 rounded-md font-medium text-white text-center"
                    style={{ background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)" }}
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-md border border-gray-300 font-medium text-gray-900 text-center"
                  >
                    Register
                  </Link>
                </>
              )}

              {session?.user?._id && (
                <>
                  <Link href="/" ref={firstLinkRef} onClick={() => setOpen(false)} className={linkClasses("/") + " text-lg"}>Home</Link>
                  <Link href="/services" onClick={() => setOpen(false)} className={linkClasses("/services") + " text-lg"}>Services</Link>
                  <Link href="/about" onClick={() => setOpen(false)} className={linkClasses("/about") + " text-lg"}>About Us</Link>
                  <Link href="/contact" onClick={() => setOpen(false)} className={linkClasses("/contact") + " text-lg"}>Contact</Link>

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="mt-4 px-4 py-3 rounded-md font-medium text-white text-center"
                    style={{ background: "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)" }}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => { setOpen(false); signOut(); }}
                    className="
                      relative px-5 py-3 rounded-xl font-semibold text-white text-center
                      bg-gradient-to-br from-red-500 via-red-600 to-red-700
                      shadow-[0_0_18px_rgba(255,0,0,0.45)]
                      hover:shadow-[0_0_28px_rgba(255,60,60,0.75)]
                      active:scale-95
                      transition-all duration-300 ease-out
                      overflow-hidden cursor-pointer
                    "
                  >
                    <span
                      className="
                        absolute inset-0 bg-gradient-to-r 
                        from-transparent via-white/25 to-transparent
                        opacity-0 hover:opacity-100
                        translate-x-[-120%] hover:translate-x-[120%]
                        transition-all duration-700
                      "
                    ></span>

                    <span className="relative z-10 tracking-wide">Logout</span>
                  </button>

                </>
              )}
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <div>Need help? <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-800 cursor-pointer underline">Contact Us</Link></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
