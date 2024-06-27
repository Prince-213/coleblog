import React from "react";
import SubmitButton from "./_ui/submit";
import { login } from "./_action/login";

const Page = () => {
  return (
    <div className=" w-full h-screen">
      <form
        action={login}
        className=" w-[40%] mx-auto p-10 rounded-xl border shadow-xl space-y-6"
      >
        <h1 className=" font-bold text-2xl">Admin Auth</h1>
        <br />
        <div className=" ">
          <h1>Name</h1>
          <input
            type="text"
            placeholder="Enter Title"
            name="name"
            className=" p-4 w-full border-black border"
          />
        </div>

        <div>
          <h1>Password</h1>
          <input
            type="text"
            placeholder="Enter Title"
            name="pass"
            className=" p-4 w-full border-black border"
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default Page;
