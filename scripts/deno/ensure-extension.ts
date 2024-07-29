import { exists } from "jsr:@std/fs";
import { resolve } from "jsr:@std/path";
import { Project } from "jsr:@ts-morph/ts-morph";

async function ensureHasExtension(currentModAbsolutePath: string, mod: string): Promise<string> {
  const extensionRegex = /\.(ts|tsx|js|jsx)$/;
  const relativePathRegex = /^\.{1,2}\//;
  if (relativePathRegex.test(mod) && !extensionRegex.test(mod)) {
    const fileExtension = await Promise.any(
      [".ts", ".tsx", ".js", ".jsx"].map(x => exists(resolve(currentModAbsolutePath, `${mod}${x}`)).then(b => {
        if (b) return x
        const err = new Error(`Could not find ${mod}${x} in ${currentModAbsolutePath}`)
        throw err;        
      })),
    )

    return `${mod}${fileExtension}`;
  } else {
    return mod;
  }
}

const proj = new Project({ tsConfigFilePath: "tsconfig.json" })

for (const f of proj.getSourceFiles()) {
  const fPath = f.getDirectoryPath()
  for (const imp of f.getImportDeclarations()) {
    const _mod = imp.getModuleSpecifierValue()
    const mod = await ensureHasExtension(fPath, _mod)
    imp.setModuleSpecifier(mod)
  }
}

await proj.save()
