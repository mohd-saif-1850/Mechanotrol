"use client";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-orange-50 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 pointer-events-none" />

      <div className="absolute w-[650px] h-[650px] bg-gradient-to-br from-[#FF3B30]/25 via-[#FF6A00]/25 to-[#FF8C00]/25 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.1)] px-12 py-16 rounded-3xl text-center max-w-xl mx-auto">
        
        <h2 className="text-sm uppercase tracking-[4px] font-semibold text-gray-500">
          Mechanotrol Tech
        </h2>

        <h1 className="mt-2 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
          Technician Info System
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          We are currently developing a complete information system for
          technicians including roles, categories, responsibilities, tools,
          and mechanical support data.
        </p>

        <p className="mt-2 text-gray-500">
          Stay tuned — launching soon.
        </p>

        <div className="mt-10 text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Mechanotrol Tech — All Rights Reserved
        </div>
      </div>
    </div>
  );
}
