"use client";
import { useExamples } from "./useExamples";
import { ExampleListContainer } from "~/components/examples/ExampleListContainer";

export default function UseWorkerPage() {
  const { items, pending, fetchData, clearData } = useExamples();

  return (
    <main>
      <ExampleListContainer
        items={items}
        pending={pending}
        onLoad={fetchData}
        onClear={clearData}
      />
    </main>
  );
}
