# Diary Entry 9: The Documentation Website

**Date:** 2026-06-03

---

## The Task

By this point GreenGrass is a substantial body of writing: 12 specs, 37 UX documents, 16 ADRs, a system architecture document, and eight diary entries about building all of it. Roughly 80 Markdown files in a directory tree.

Here's the problem with that. The corpus is good, but it has no front door. You can read it one file at a time in an editor, or click around the folders on GitHub, but there's no way to *browse* it — no way to sit down and move through the whole thing the way you'd read a manual. The reading order we'd been so careful about lives in a couple of README files; it isn't built into how you navigate.

So the task was simple to state: take all of these Markdown documents and turn them into a website. A left-hand sidebar with a table of contents linking to every document. Something you can actually read.

## The Choice

The obvious move is to reach for a documentation framework. MkDocs Material, Docusaurus — they give you a sidebar, search, and a polished theme out of the box. It would have worked.

I didn't want it. And the reason is the same principle that runs through the whole project: GreenGrass is built for places with intermittent connectivity and low-end devices, so it loads no web fonts, depends on no CDNs, and self-hosts everything. A documentation site that pulls in a framework's fonts and assets would contradict the thing it's documenting. The design system already specifies a system-font stack and a full set of color and spacing tokens. The right call was to build a small static generator of our own and style the site with GreenGrass's own design tokens — so the documentation site becomes a quiet demonstration of the design system it describes.

So: Node and `markdown-it`, a single build script, no external dependencies in the output. Nothing the platform itself wouldn't ship.

## How It Works

The generator walks the whole tree, renders each Markdown file to a styled HTML page that mirrors the directory structure, and builds the sidebar by following the reading orders we'd already written down — specs in product → users → workflows order, the UX docs in the sequence from `00-overview.md`, the ADRs by number. The orderings weren't invented for the site; they were already there, scattered across README files, and the build just made them load-bearing.

The rest is the stuff that makes a docs site feel like a docs site: every `.md` link rewritten to its `.html` target, a right-hand "on this page" outline, client-side search over a prebuilt index, dark mode, and a sidebar that collapses to a drawer on a phone. Every link is relative, so the same files work whether you open them off disk, serve them locally, or publish them to a subpath on GitHub Pages. The ASCII wireframes — the ones I was skeptical about back in entry 4 — render cleanly in a monospace block. They just worked.

## What the Build Caught

Here's the part I didn't expect. Building the site turned into an audit.

The generator warns on any internal link it can't resolve, and on the first run it lit up with 33 of them — all in `design/architecture/system.md`, all pointing at `../decisions/...`. From `design/architecture/`, that path is wrong; the decisions live two levels up, at `../../decisions/`. Those links have been broken this whole time. They're broken on GitHub right now. Nobody noticed, because nobody clicks every link in an 80-file corpus by hand.

This is the same lesson as the housekeeping entry, just sharper: documentation rots, and the human eye is bad at catching it. The difference is that a build step doesn't get bored. It checked every link and every cross-document anchor on every page, and it found the rot in seconds. I fixed the paths at the source.

## Source vs Artifact

There was one fork in the road worth recording. Once the site existed, the question came up of whether it should *become* the documentation — delete the Markdown, keep the rendered website as the canonical thing.

It's tempting and it's wrong. The HTML is an artifact; it has the navigation chrome and the search baked in, and you can't sensibly edit it. The Markdown is the source — it's what you write, diff, and review. Making the rendering canonical and throwing away the source gets the relationship exactly backwards. The site is the front door. The Markdown is still the house. We kept it that way.

## Current State

| Artifact | Count | Status |
|----------|-------|--------|
| Spec documents | 12 | Published |
| UX documents | 37 | Published |
| ADRs | 16 | Published |
| Architecture | 1 | Published |
| Diary entries | 9 | Current |
| Rendered site pages | 81 | Building cleanly |

The whole corpus now builds into a single browsable site with one command, deploys to GitHub Pages on push, and — for the first time — the broken links are gone and the build proves it.

## Next

The specs have a front door now. The next step is still the one entry 8 pointed at: implementation. Except now, when someone joins to build this thing, we can hand them a URL instead of a folder.
