import type { Metadata } from "next";

export const dynamic = "force-dynamic";

import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = cookies().get("admin");

  return (
    <html lang="en">
      <body className=" bg-white-milk w-full">
        <header className=" w-[90%] lg:w-[80%] mx-auto py-10 flex items-center justify-between">
          <nav>
            <ul className=" flex items-center space-x-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h1 className=" text-2xl font-semibold">Coleman Blog</h1>
          </div>

          <nav>
            <ul className=" flex items-center space-x-5">
              <li>
                {cookies().get("admin") ? (
                  <Link href={"/admin"}>Admin Page</Link>
                ) : (
                  <Link href={"/login"}>Log In</Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className=" w-full bg-primary py-10 flex items-center justify-center text-white-milk">
          <div className=" text-center">
            <h1>Coleman Blog</h1>
            <p>2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
