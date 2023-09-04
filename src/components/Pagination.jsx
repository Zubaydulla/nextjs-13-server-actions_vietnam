"use client";

import useCustomRouter from "@/hooks/useCustomRouter";

const Pagination = ({ totalPage }) => {
  const newArray = [...Array(totalPage)].map((_, i) => i + 1);
  const { query, pushQuery } = useCustomRouter();
  return (
    <div className="my-4 flex gap-1">
      {newArray.map((page, i) => (
        <button
          className={`${(query.page || 1) === page ? "bg-slate-700" : ""}`}
          key={i}
          onClick={() => pushQuery({ page })}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
