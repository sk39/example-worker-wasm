import { useCallback, useState } from "react";
import { convertExampleList, type ExampleItem, fetchJson } from "~/lib";

export function useExamples() {
  const [items, setItems] = useState<ExampleItem[]>([]);
  const [pending, setPending] = useState(false);

  const fetchData = useCallback(async () => {
    console.time("process");
    setPending(true);
    try {
      const data = await fetchJson("/api/examples");
      const parsed = convertExampleList(data.list);
      setItems(parsed);
      console.timeEnd("process");
    } catch (error) {
      console.error("Fetching data failed:", error);
    } finally {
      setPending(false);
    }
  }, []);

  const clearData = useCallback(() => setItems([]), []);

  return {
    items,
    pending,
    fetchData,
    clearData,
  };
}
