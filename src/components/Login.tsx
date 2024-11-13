// src/Login.js

import { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");

 const handleContinue = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Mobile number entered:", mobile);
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-red-100">
      <div className="w-full max-w-sm h-80 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-4">
          Login <span className="text-black">or</span>{" "}
          <span className="text-black">Signup</span>
        </h2>

        <form onSubmit={handleContinue} className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <span className="text-gray-600">+91</span>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="flex-1 ml-3 border-none outline-none placeholder-gray-400"
              required
            />
          </div>

          <p className="text-xs text-center text-gray-500">
            By continuing, I agree to the{" "}
            <a href="#" className="text-pink-500 underline">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-pink-500 underline">
              Privacy Policy
            </a>
          </p>

          <button
            type="submit"
            className="w-full py-3 text-white bg-rose-500 rounded-md hover:bg-pink-600 font-semibold"
          >
            CONTINUE
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Have trouble logging in?{" "}
          <a href="#" className="text-pink-500 underline">
            Get help
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
