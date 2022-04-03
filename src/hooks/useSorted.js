import { useState } from "react";

export const useSorted = () => {
  const [sorted, setSorted] = useState(null);
  return { sorted, setSorted };
}