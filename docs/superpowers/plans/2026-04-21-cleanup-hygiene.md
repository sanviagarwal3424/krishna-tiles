# Cleanup & Hygiene Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove dead files, unused deps, and gitignore gaps so the premium redesign starts from a clean base.

**Architecture:** Pure housekeeping. Five short tasks, each independently committable: (1) gitignore updates, (2) delete dead files, (3) prune dependencies, (4) reinstall, (5) final build verification.

**Tech Stack:** Next.js 16, Node.js 24, npm.

**Spec:** `docs/superpowers/specs/2026-04-21-cleanup-hygiene-design.md`

---

## Task 1: Update .gitignore

**Files:**
- Modify: `.gitignore` (append 3 lines after existing `.npm-cache/` / `.vscode/` block)

- [ ] **Step 1: Show current .gitignore tail**

Run: `tail -5 .gitignore`
Expected output ends with:
```
next-env.d.ts
.npm-cache/
.vscode/
```

- [ ] **Step 2: Append agent tooling block**

Append these exact lines to the end of `.gitignore`:

```
# agent tooling (local-only)
.claude/
.vexp/
```

- [ ] **Step 3: Verify .claude and .vexp are now ignored**

Run: `git check-ignore -v .claude/ .vexp/`
Expected: both paths report `.gitignore:<linenum>:.claude/` and `.gitignore:<linenum>:.vexp/`.

- [ ] **Step 4: Verify git status is cleaner**

Run: `git status --short`
Expected: `.claude/` and `.vexp/` no longer listed as untracked. `start/` and `vexp.toml` still untracked, `public/logo.svg` still shows as modified.

- [ ] **Step 5: Commit the gitignore change**

```bash
git add .gitignore
git commit -m "chore: gitignore agent tooling directories"
```

- [ ] **Step 6: Commit vexp.toml so collaborators share the config**

```bash
git add vexp.toml
git commit -m "chore: add vexp config"
```

---

## Task 2: Delete dead files and directories

**Files:**
- Delete: `start/` (directory)
- Delete: `scripts/` (directory)
- Delete: `public/file.svg`
- Delete: `public/globe.svg`
- Delete: `public/next.svg`
- Delete: `public/vercel.svg`
- Delete: `public/window.svg`

- [ ] **Step 1: Confirm the dead items exist**

Run: `ls -d start scripts && ls public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg`
Expected: all seven paths listed, no errors.

- [ ] **Step 2: Double-check `start/` contains nothing of value**

Run: `find start -type f`
Expected: zero files (only a stray `.claude` directory from a failed earlier setup).

- [ ] **Step 3: Delete the directories and files**

```bash
rm -rf start scripts
rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

- [ ] **Step 4: Verify deletions**

Run: `ls start scripts 2>&1; ls public/*.svg`
Expected:
- `start` and `scripts`: "No such file or directory"
- `public/*.svg`: only `logo.svg` and `Logo Krishna Tiles (1).svg` listed.

- [ ] **Step 5: Commit**

```bash
git add -A public scripts start 2>/dev/null || true
git add -u
git commit -m "chore: remove Next.js starter defaults and empty dirs"
```

---

## Task 3: Remove unused heavy dependencies from package.json

**Files:**
- Modify: `package.json`

**Context:** vexp verified zero imports of `three`, `@react-three/fiber`, `@react-three/drei`, `gsap` anywhere in `src/`. Keep `framer-motion` — needed for later motion sub-project.

- [ ] **Step 1: Show current dependencies block**

Run: `cat package.json`
Expected dependencies block:
```json
"dependencies": {
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.5.0",
  "@types/three": "^0.183.1",
  "framer-motion": "^12.38.0",
  "gsap": "^3.14.2",
  "next": "16.2.2",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "three": "^0.183.2"
}
```

- [ ] **Step 2: Rewrite `package.json` with pruned deps**

Replace the entire file with:

```json
{
  "name": "cc",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.38.0",
    "next": "16.2.2",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.2",
    "typescript": "^5"
  }
}
```

Note: `@types/three` was in `dependencies` in the original; it is removed entirely (not moved to `devDependencies`).

- [ ] **Step 3: Verify the file parses**

Run: `node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('ok')"`
Expected: `ok`

- [ ] **Step 4: DO NOT commit yet**

`package-lock.json` is out of sync with `package.json`. Commit in Task 4 after `npm install` refreshes the lockfile.

---

## Task 4: Reinstall to prune node_modules and refresh lockfile

**Files:**
- Auto-modified: `package-lock.json`, `node_modules/`

- [ ] **Step 1: Run install**

Run: `npm install`
Expected: installs/removes packages, reports "removed N packages" where N is roughly 40-80 (three.js + drei pull in lots of transitive deps).

- [ ] **Step 2: Verify the pruned libs are gone from node_modules**

Run: `ls node_modules/three node_modules/gsap node_modules/@react-three 2>&1`
Expected: all three report "No such file or directory".

- [ ] **Step 3: Verify framer-motion is still present**

Run: `ls -d node_modules/framer-motion && cat node_modules/framer-motion/package.json | grep '"version"' | head -1`
Expected: directory exists, version ~12.38.x printed.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove unused three.js, gsap dependencies"
```

---

## Task 5: Verify build still passes

**Files:**
- Auto-generated: `.next/` (not committed)

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: build completes successfully. All pages statically generated or marked dynamic. No import-resolution errors.

- [ ] **Step 2: If build fails, diagnose before proceeding**

If the build fails citing a missing import from `three`, `@react-three/*`, or `gsap`: the import needs to be removed from the offending file. The file path will be in the error. Open the file, remove the import and any code using the imported symbol, then re-run build. Do NOT re-add the dep.

If it fails for any other reason: stop and report. Do not proceed to the next sub-project.

- [ ] **Step 3: Sanity-check dev server boots**

Run: `timeout 15 npm run dev 2>&1 | head -30`
Expected: Output contains "Ready" or "Local: http://localhost:3000" within 15 seconds. Timeout killing the server is fine.

- [ ] **Step 4: Final git status check**

Run: `git status --short`
Expected: Only `public/logo.svg` remains modified (that's sub-project 2 territory — leave it). No untracked files from this sub-project.

- [ ] **Step 5: No commit needed**

Build artifacts aren't committed. Sub-project 1 is complete.

---

## Success criteria (post-plan)

- `git log --oneline -5` shows the 3 cleanup commits plus the spec commit.
- `npm run build` exits zero.
- `ls public/*.svg` lists only the two logo files.
- `du -sh node_modules` is smaller than before the plan started.
- `.claude/` and `.vexp/` no longer appear in `git status`.
