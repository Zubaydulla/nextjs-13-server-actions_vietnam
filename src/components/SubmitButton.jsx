"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = ({ value }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : value}
    </button>
  );
};

export default SubmitButton;
