"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async (formData: FormData) => {
  if (cookies().get("admin")) {
    cookies().delete("admin");
    redirect("/login");
  }
};
