import { walk } from "jsr:@std/fs";

const files: string[] = []
const dirs: string[] = []

for await (const it of walk("src")) {
    if (it.isFile) files.push(it.path)
    if (it.isDirectory) dirs.push(it.path)
}

await Deno.writeTextFile("scripts/deno/manifest.json", JSON.stringify({ files, dirs }, null, 2))
