import * as fs from "fs"
import * as path from "path"

const sourceDirectory = process.argv[2]
const targetDirectoryBase = "src/"
const utilsImportRegex =
  /import\s+{([^}]+)}\s+from\s+["']\.\.\/\.\.\/utils\/([^'"]+)["']?\s*/g

const consolidateImports = (content) => {
  const importMatches = [...content.matchAll(utilsImportRegex)]
  if (importMatches.length === 0) {
    return content // No utility imports found, return original content
  }

  // Consolidate all imports into a single object
  const allImports = importMatches.reduce((acc, match) => {
    match[1].split(",").forEach((importName) => {
      const trimmedName = importName.trim()
      if (trimmedName) acc[trimmedName] = true
    })
    return acc
  }, {})

  // Create the consolidated import statement with an extra newline at the end
  const consolidatedImport = `import { ${Object.keys(allImports).join(", ")} } from "@/lib/utils"\n\n`

  // Replace the first import and remove the rest
  let firstImportIndex = content.indexOf(importMatches[0][0])
  let beforeFirstImport = content.substring(0, firstImportIndex)
  let afterFirstImport = content
    .substring(firstImportIndex)
    .replace(utilsImportRegex, "")
  return `${beforeFirstImport}${consolidatedImport}${afterFirstImport}`
}

const copyAndModifyTsxFiles = (sourceDir, targetDirBase) => {
  const targetDir = path.join(targetDirBase, "components-folder")

  const createDirRecursive = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }
  }

  const copyAndModifyFile = (source, target) => {
    let content = fs.readFileSync(source, { encoding: "utf8" })
    content = consolidateImports(content)
    fs.writeFileSync(target, content)
    console.log(`Processed and copied: ${source} -> ${target}`)
  }

  const isTsxFile = (filePath) =>
    filePath.endsWith(".tsx") && /^[A-Z]/.test(path.basename(filePath))

  const traverseDir = (currentPath) => {
    const contents = fs.readdirSync(currentPath, { withFileTypes: true })
    contents.forEach((dirent) => {
      const fullPath = path.join(currentPath, dirent.name)
      if (dirent.isDirectory()) {
        traverseDir(fullPath)
      } else if (isTsxFile(fullPath)) {
        const targetPath = path.join(targetDir, path.basename(fullPath))
        createDirRecursive(path.dirname(targetPath))
        copyAndModifyFile(fullPath, targetPath)
      }
    })
  }

  createDirRecursive(targetDir)
  traverseDir(sourceDir)
}

if (!sourceDirectory) {
  console.error("Usage: node script.js <source-directory>")
  process.exit(1)
}

copyAndModifyTsxFiles(sourceDirectory, targetDirectoryBase)
