"use client";
import useCustomRouter from "@/hooks/useCustomRouter";
import SubmitButton from "./SubmitButton";

const SearchForm = () => {
  const { query, pushQuery } = useCustomRouter();

  const handleSearch = async (formData) => {
    const textForSearch = formData.get("search");
    pushQuery({ textForSearch, page: 1 });
  };
  return (
    <form action={handleSearch}>
      <input
        type="search"
        name="search"
        placeholder="search"
        defaultValue={query.search || ""}
      />
      <SubmitButton value="search" />
    </form>
  );
};

export default SearchForm;
