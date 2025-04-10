import React, { useState } from "react";

const Login = () => {
  const [logIn, setLogIn] = useState(false);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {logIn ? (
        <form className="flex items-center my-32">
          <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-500">Please sign up to book appointment</p>
            <div className="w-full">
              <p>Full Name</p>
              <input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-[#e7e7e7] rounded w-full p-2 mt-1"
              />
            </div>
            <div className="w-full">
              <p>Email</p>
              <input
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-[#e7e7e7] rounded w-full p-2 mt-1"
              />
            </div>
            <div className="w-full">
              <p>Password</p>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-[#e7e7e7] rounded w-full p-2 mt-1"
              />
            </div>
            <button className="bg-maincolor text-white w-full py-2 my-2 rounded-md text-base">
              Create Account
            </button>
            <p>
              Already have an account?&nbsp;
              <span
                href=""
                onClick={() => setLogIn(false)}
                className="text-maincolor underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form className="flex items-center my-32">
          <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-500">Please log in to book appointment</p>
            <div className="w-full">
              <p>Email</p>
              <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
                type="text"
                className="border border-[#e7e7e7] rounded w-full p-2 mt-1"
              />
            </div>
            <div className="w-full">
              <p>Password</p>
              <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
                type="password"
                className="border border-[#e7e7e7] rounded w-full p-2 mt-1"
              />
            </div>
            <button className="bg-maincolor text-white w-full py-2 my-2 rounded-md text-base">
              Login
            </button>
            <p>
              Create an new account?&nbsp;
              <span
                href=""
                onClick={() => setLogIn(true)}
                className="text-maincolor underline cursor-pointer"
              >
                Click Here
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
