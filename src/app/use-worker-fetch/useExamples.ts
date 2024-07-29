import { useCallback, useEffect, useRef, useState } from "react";
import type { ExampleItem } from "~/lib";

export function useExamples() {
  const [items, setItems] = useState<ExampleItem[]>([]);
  const [pending, setPending] = useState(false);

  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new Worker(new URL("./worker.ts", import.meta.url));
    workerRef.current.onmessage = (
      e: MessageEvent<ExampleItem[] | { error: string }>,
    ) => {
      if ("error" in e.data) {
        console.error("Error fetching data:", e.data.error);
        setPending(false);
      } else {
        setItems(e.data);
        setPending(false);
        console.timeEnd("process");
      }
    };

    return () => workerRef.current?.terminate();
  }, []);

  const fetchData = useCallback(async () => {
    console.time("process");
    setPending(true);
    workerRef.current?.postMessage({});
  }, []);

  const clearData = useCallback(() => setItems([]), []);

  return {
    items,
    pending,
    fetchData,
    clearData,
  };
}
