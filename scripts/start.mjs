#!/usr/bin/env node
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

function run(args) {
  return new Promise((res, rej) => {
    const child = spawn(npmCmd, args, { cwd: root, stdio: "inherit", shell: false });
    child.on("exit", (code) =>
      code === 0 ? res() : rej(new Error(`npm ${args.join(" ")} exited with ${code}`))
    );
  });
}

const needsInstall = !existsSync(resolve(root, "node_modules"));

(async () => {
  if (needsInstall) {
    console.log("[start] node_modules missing — running `npm install`...");
    await run(["install"]);
  } else {
    console.log("[start] node_modules present — skipping install.");
  }
  console.log("[start] launching dev server on http://localhost:3010 ...");
  await run(["run", "dev"]);
})().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
