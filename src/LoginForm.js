import React from "react";

export function LoginForm() {
  return (
    <div className="form-control w-full max-w-xs py-10 px-5 flex flex-col justify-center">
      <label name="username" className="label">
        <span className="label-text">What is your name?</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label name="password" className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
