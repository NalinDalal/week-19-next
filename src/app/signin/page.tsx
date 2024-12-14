"use client";

import axios from "axios";

export default function Signin() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-2 border">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>

        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
