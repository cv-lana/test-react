import { useEffect, useState } from "react";

export const useFetch = (value) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const json = await fetch(`https://jsonplaceholder.typicode.com/users?${value ? `_sort=${value}&_order=asc` : ''}`);
        const res = await json.json();
        setResponse(res);
      } catch (err) {
        setError(err);
      }
    })();
  }, [value]);

  return { response, error };
}