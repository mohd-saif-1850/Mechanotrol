"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setErrorMsg(result.error);
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 pointer-events-none" />

      <div className="relative w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/80 border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#FF3B30] to-[#FF8C00] flex items-center justify-center text-white text-4xl font-extrabold shadow-[0_10px_30px_rgba(255,106,0,0.45)] animate-[float_4s_ease-in-out_infinite]">
            M
          </div>

          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600">Login to continue</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <div className="text-sm text-gray-600 mb-1">Email</div>
            <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white hover:border-[#FF6A00] focus-within:ring-2 focus-within:ring-[#FF6A00] transition">
              <Mail className="w-5 h-5 text-[#FF6A00]" />
              <input
                type="email"
                value={email}
                required
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-600 mb-1">Password</div>
            <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white hover:border-[#FF6A00] focus-within:ring-2 focus-within:ring-[#FF6A00] transition">
              <Lock className="w-5 h-5 text-[#FF6A00]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                required
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>

            <Link
              href="/forgot"
              className="text-[#FF6A00] font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-100/70 p-3 rounded-lg border border-red-300">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold text-lg transition transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,106,0,0.55)]"
            style={{
              background:
                "linear-gradient(90deg, #FF3B30, #FF6A00, #FF8C00)",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center pt-2 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#FF6A00] font-medium hover:underline"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
