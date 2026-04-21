# Cleanup & Hygiene — Design Spec

**Date:** 2026-04-21
**Sub-project:** 1 of 5 (cleanup → logo → visual refinement → motion → code quality)
**Goal:** Remove dead files, unused deps, and gitignore gaps so the premium redesign starts from a clean base.

## Scope

This spec covers deletions, dependency pruning, and `.gitignore` updates only. It does NOT touch logo files, component styling, animations, or code refactors — those are later sub-projects.

## Changes

### 1. Delete dead files and directories

| Path | Reason |
|------|--------|
| `start/` | Leftover from a failed `vexp setup start` command; empty except a stray `.claude/` subfolder |
| `scripts/` | Empty directory, no referenced scripts |
| `public/file.svg` | Next.js starter default, zero references in `src/` |
| `public/globe.svg` | Next.js starter default, zero references in `src/` |
| `public/next.svg` | Next.js starter default, zero references in `src/` |
| `public/vercel.svg` | Next.js starter default, zero references in `src/` |
| `public/window.svg` | Next.js starter default, zero references in `src/` |

### 2. Remove unused dependencies

Verified via vexp: zero imports in `src/` for any of the following. Remove from `package.json`:

- `three`
- `@types/three`
- `@react-three/fiber`
- `@react-three/drei`
- `gsap`

**Keep** `framer-motion` — will be used in sub-project 4 (Motion layer). Removing and re-adding later is churn.

Run `npm install` after editing `package.json` so `package-lock.json` and `node_modules` update.

### 3. Update `.gitignore`

Add entries for currently-untracked tooling directories:

```
# agent tooling (local-only)
.claude/
.vexp/
```

`vexp.toml` stays committed so future sessions and collaborators share the same vexp config.

## Out of scope

- Logo files (`public/logo.svg`, `public/Logo Krishna Tiles (1).svg`) — handled in sub-project 2.
- `.next/` build cache — regenerates automatically; nuking it is optional and not required.
- `tsconfig.tsbuildinfo` — already in `.gitignore`; regenerates on next build.
- Component refactors, styling, animation — later sub-projects.

## Verification

1. `npm run build` must succeed after all changes.
2. `git status` should show a clean tree (no stray untracked agent dirs once `.gitignore` is updated).
3. No runtime errors on `npm run dev` for the home page.

If `npm run build` fails, roll back the most recent change in the sequence and diagnose before proceeding.

## Risks

- **Low:** removing deps breaks an import we missed. Mitigation: vexp indexed 33 files and returned 0 pivots for these libs; `npm run build` will catch any stragglers.
- **Low:** `.gitignore` entries for `.claude/` may hide useful shared settings. Mitigation: current `.claude/` only holds local settings (`settings.local.json`) and a generated `CLAUDE.md` vexp addendum — nothing collaborative.

## Success criteria

- Repo size on disk drops measurably (primarily from pruned `node_modules`).
- `git status` is clean apart from intentional changes.
- Build passes.
- No visual or functional regression on any page.
