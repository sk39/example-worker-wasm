import dayjs from "dayjs";
import type { ExampleItem } from "./types";

/**
 * fetch JSON data.
 */
export async function fetchJson(url: string) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`[${response.status}] ${response.statusText}`);
  return await response.json();
}

/**
 * Transforms ExampleItem. Example of a time-consuming process.
 */
export function convertExampleItem(item: ExampleItem): ExampleItem {
  function formatTitle(base: string): string {
    return base.replace(/Item/, " Item").replace(/-/, " No.");
  }

  function formatBody(base: string): string {
    return base.toUpperCase();
  }

  // 時間のかかる処理にしたいので、非効率な再帰処理で実装
  function fib(n: number): number {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }

  return {
    id: item.id,
    title: formatTitle(item.title),
    body: formatBody(item.body),
    fibValue: fib(Number(item.id) % 27),
    createdAt: dayjs(item.createdAt).format("YYYY/MM/DD"),
    updatedAt: dayjs(item.updatedAt).format("YYYY/MM/DD"),
  };
}

/**
 * Transforms ExampleItem array. Example of a time-consuming process.
 */
export function convertExampleList(list: ExampleItem[]): ExampleItem[] {
  console.time("convertExampleList");
  const ret = list.map(convertExampleItem);
  console.timeEnd("convertExampleList");
  return ret;
}
