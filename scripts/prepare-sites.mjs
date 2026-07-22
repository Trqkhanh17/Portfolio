import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, "client"), { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });

await cp(resolve(root, "out"), resolve(dist, "client"), { recursive: true });
await cp(resolve(root, ".openai", "hosting.json"), resolve(dist, ".openai", "hosting.json"));

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404 && !url.pathname.includes(".")) {
      const fallback = new URL(request.url);
      fallback.pathname = url.pathname.endsWith("/")
        ? url.pathname + "index.html"
        : url.pathname + "/index.html";
      response = await env.ASSETS.fetch(new Request(fallback, request));
    }

    return response;
  },
};
`;

await writeFile(resolve(dist, "server", "index.js"), worker);

const hosting = JSON.parse(await readFile(resolve(root, ".openai", "hosting.json"), "utf8"));
if (!hosting.project_id) throw new Error("Missing Sites project_id");
