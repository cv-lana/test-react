import { useEffect, useState } from "react";

export const useCount = (item) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (item) {
      setCount(item.length);
    }
  }, [item]);

  return { count };
};