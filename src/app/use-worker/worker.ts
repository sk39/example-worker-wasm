import { convertExampleList, type ExampleItem } from "~/lib";

onmessage = async (e: MessageEvent<{ items: ExampleItem[] }>) => {
  const { items } = e.data;
  try {
    const parsed = convertExampleList(items);
    postMessage(parsed);
  } catch (error) {
    postMessage({ error: (error as Error).message });
  }
};
