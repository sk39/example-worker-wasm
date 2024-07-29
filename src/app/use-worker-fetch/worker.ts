import { convertExampleList, type ExampleItem, fetchJson } from "~/lib";

onmessage = async () => {
  try {
    const data = await fetchJson("/api/examples");
    const parsed = convertExampleList(data.list as ExampleItem[]);
    postMessage(parsed);
  } catch (error) {
    postMessage({ error: (error as Error).message });
  }
};
