"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1> {error.message}</h1>
      <button onClick={reset}>Try again</button>;
    </div>
  );
};

export default Error;
