import { selectScript } from "../core/utils.js"

let { filePath, command } = await selectScript(
  `Open database for which script?`
)

edit(
  path.resolve(
    filePath,
    "..",
    "..",
    "db",
    `_${command}.json`
  )
)

export {}
