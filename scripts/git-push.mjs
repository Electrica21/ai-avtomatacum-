// Pushes the current branch to GitHub using the token stored in .env.local,
// so the token never needs to be typed into a command or shared again.
// Usage: node scripts/git-push.mjs
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
process.loadEnvFile(path.join(projectRoot, ".env.local"));

const { GITHUB_TOKEN, GITHUB_REPO } = process.env;
if (!GITHUB_TOKEN || !GITHUB_REPO) {
  console.error("Missing GITHUB_TOKEN or GITHUB_REPO in .env.local");
  process.exit(1);
}

const GIT = process.platform === "win32"
  ? "C:\\Program Files\\Git\\cmd\\git.exe"
  : "git";

const authUrl = GITHUB_REPO.replace("https://", `https://${GITHUB_TOKEN}@`);
const branch = execFileSync(GIT, ["branch", "--show-current"], {
  cwd: projectRoot,
  encoding: "utf-8",
}).trim();

execFileSync(GIT, ["push", authUrl, `${branch}:${branch}`], {
  cwd: projectRoot,
  stdio: "inherit",
});
