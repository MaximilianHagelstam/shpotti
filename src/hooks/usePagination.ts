import useSWRInfinite from "swr/infinite";

const usePagination = <T>(url: string, pageSize: number) => {
  const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${url}?page=${pageIndex + 1}&limit=${pageSize}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite<T[]>(
    getKey,
    fetcher
  );

  const paginatedData = data?.flat();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isReachedEnd = data && data[data.length - 1].length < pageSize;

  return {
    data: paginatedData,
    loading: isValidating,
    error,
    size,
    setSize,
    isReachedEnd,
  };
};

export default usePagination;
