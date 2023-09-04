import { useRouter, useSearchParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};

  let search = searchParams.get("search");
  let sort = searchParams.get("sort");
  let page = searchParams.get("page");

  if (search) query.search = search;
  if (sort) query.sort = sort;
  if (page) query.page = parseInt(page);

  const pushQuery = ({ textForSearch, sortValue, page }) => {
    if (textForSearch !== undefined) {
      textForSearch === ""
        ? delete query.search
        : (query.search = textForSearch);
    }

    if (sortValue !== undefined) {
      sortValue === "createdAt" ? delete query.sort : (query.sort = sortValue);
    }

    if (page !== undefined) {
      page === 1 ? delete query.page : (query.page = page);
    }

    const newQuery = new URLSearchParams(query).toString();
    router.push(`?${newQuery}`);
  };

  return { query, pushQuery };
};

export default useCustomRouter;
