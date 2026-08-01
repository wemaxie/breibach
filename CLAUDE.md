# Baustoffe Breitbach — Astro app

**The full project context lives one level up, in `../CLAUDE.md`** (client facts, the strict
design system and its hard bans, the open client feedback, architecture, gotchas, launch
blockers, history log). Read it before changing anything here. It is outside this git repo —
if you cloned this repo standalone, ask for that file.

<!-- CLAUDE.md and AGENTS.md were a hardlink (one inode, stock Astro scaffold text).
     The link was broken deliberately on 2026-07-28: git stores them as two independent
     blobs anyway, and Write/Edit silently replace the inode, which would leave AGENTS.md
     stale without warning. These instructions are agent-neutral and serve both files —
     change one, change the other in the same commit. -->

## Quick reference

- Dev server: `preview_start({name: "site"})` — config `site`, port **3000** (pinned in
  `astro.config.mjs`; the preview proxy expects 3000). Do **not** start it via Bash.
  `README.md` still says 4321 — stale.
- Only verified quality gate: `npm --prefix site run build` (run from the parent dir).
- Do **not** use `astro check` — `@astrojs/check`/`typescript` are not installed, so it hits
  an interactive prompt and exits 0 without checking anything.
- Content lives in `src/i18n/{de,en,fr}.ts` — three standalone files, no shared type, no
  parity check. Keep array lengths and order in sync manually; `Produkte.astro` maps images
  to categories **by index**.
- Design rules are strict and enumerated in `../CLAUDE.md` §2 (monochrome + one green,
  zero border-radius, no monospace, no carousels, no em dashes). Do not improvise.
