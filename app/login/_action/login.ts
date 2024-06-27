"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  const name = formData.get("name");
  const pass = formData.get("pass");

  if (name === "admin" && pass === "123") {
    cookies().set({
      name: "admin",
      value: "jskfljijsdakldmfa",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    redirect("/admin");
  }
};
