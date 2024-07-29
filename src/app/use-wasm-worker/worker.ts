onmessage = async () => {
  try {
    const wasm = await import("~/../wasm/pkg");
    const res = await wasm.fetch_examples(true);
    postMessage(res.list);
  } catch (error) {
    postMessage({ error: (error as Error).message });
  }
};
