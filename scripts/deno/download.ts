import list from "./manifest.json" with { type: "json"};

const target = Deno.args[0] || "src"

for (const d of list.dirs) {
    await Deno.mkdir(d.replace(/^src/, target), { recursive: true })
}

for (const f of list.files) {
    await Deno.writeFile(f.replace(/^src/, target), await fetch(import.meta.resolve("../../" + f)).then(r => r.body!))
}
