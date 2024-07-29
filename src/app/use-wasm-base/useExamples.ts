import { useCallback, useEffect, useState } from "react";
import type { ExampleItem } from "~/lib";

export function useExamples() {
  const [items, setItems] = useState<ExampleItem[]>([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const loadWasm = async () => {
      await import("~/../wasm/pkg");
      console.log("Loaded wasm module");
    };

    loadWasm().then();
  }, []);

  const fetchData = useCallback(async () => {
    console.time("process");
    // console.time("fetch");
    setPending(true);
    try {
      const wasm = await import("~/../wasm/pkg");
      const res = await wasm.fetch_examples(false);
      setItems(res.list);
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
