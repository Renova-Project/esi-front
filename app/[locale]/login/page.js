"use client";

import { API_URL } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const t = useTranslations("Login");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "khelil@esi.dz" && password === "0310") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "ETIC",
          email: "etic@esi",
          token: "2SK92J92",
        })
      );
      setTimeout(() => {
        router.push("/fr/profile/clubs/main");
      }, 2000);
    } else {
      setError("Email ou mot de passe invalides");
    }
  };
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              {t("title")}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  {t("email")}
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="abc@esi.dz"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  {t("password")}
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                {loading ? "Loading..." : t("submitBtn")}
              </button>
              {error ? <p className="text-sm text-red-500">{error}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
