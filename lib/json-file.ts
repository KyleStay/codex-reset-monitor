import { readFile } from "node:fs/promises";

export async function readJsonFile<T>(url: URL, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(url, "utf8")) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return fallback;
    throw error;
  }
}
