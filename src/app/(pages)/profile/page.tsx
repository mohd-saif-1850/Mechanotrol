"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { User, Mail, BadgeCheck, Loader2 } from "lucide-react";

export default function UserProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const getUserData = async () => {
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await axios.get("/api/auth/get-user");
      setUser(res.data.user);
    } catch (error: any) {
      if (error?.response?.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Something went wrong while fetching user data.");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-orange-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 pointer-events-none" />

      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#FF3B30]/25 via-[#FF6A00]/25 to-[#FF8C00]/25 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="relative w-full max-w-2xl rounded-3xl p-10 backdrop-blur-2xl bg-white/70 border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">

        <div className="flex flex-col items-center text-center">

          <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-transparent bg-gradient-to-br from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] p-[3px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <User className="w-14 h-14 text-[#FF6A00]" />
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
            User Profile
          </h1>

          <p className="mt-2 text-gray-600 text-sm tracking-wide">
            Manage your personal details at Mechanotrol Tech
          </p>
        </div>

        {loading && (
          <div className="flex justify-center mt-10">
            <Loader2 className="w-8 h-8 animate-spin text-[#FF6A00]" />
          </div>
        )}

        {!loading && errorMsg && (
          <div className="mt-10 text-red-600 text-sm bg-red-100 p-4 rounded-xl border border-red-300 text-center">
            {errorMsg}
          </div>
        )}

        {!loading && user && (
          <div className="mt-12 space-y-6">

            <div className="bg-white/90 p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <User className="w-7 h-7 text-[#FF6A00]" />
                <div>
                  <p className="text-xs uppercase text-gray-500 tracking-wider">Username</p>
                  <p className="text-xl font-semibold">{user.username}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-[#FF6A00]" />
                <div>
                  <p className="text-xs uppercase text-gray-500 tracking-wider">Email</p>
                  <p className="text-xl font-semibold">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <BadgeCheck className="w-7 h-7 text-[#FF6A00]" />
                <div>
                  <p className="text-xs uppercase text-gray-500 tracking-wider">Role</p>
                  <p className="text-xl font-semibold capitalize">{user.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] h-[2px] rounded-full" />

            <p className="text-center text-gray-500 text-sm tracking-wide">
              © {new Date().getFullYear()} Mechanotrol Tech - All Rights Reserved
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
