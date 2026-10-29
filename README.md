# Markdown Notes

> Notes with live preview, search and tags.

Hack Day Haldia x GRID community - 6-hour build challenge

**Repo:** `team-matrix` | **Stack:** HTML + vanilla JavaScript | **Difficulty:** Medium-Hard | **Time:** 6 hours

## Brief
Developers and students keep notes in Markdown. Build a fast notes app that works fully offline in the browser.

## Core tasks (must-do)
- [ ] Split-pane editor with live Markdown preview (own parser or a CDN library): headings, emphasis, lists, code, links, tables, task lists
- [ ] Multiple notes: create, rename, delete, autosave to localStorage
- [ ] Tags and folders
- [ ] Full-text search with highlighted matches
- [ ] Word count and reading time
- [ ] Export a note as .md or .html
- [ ] Dark and light themes remembered between visits

## Bonus tasks (only after the core works)
- [ ] `[[wiki links]]` with backlinks
- [ ] Command palette (Ctrl+K)
- [ ] Slash commands in the editor
- [ ] Import .md files

## What is already here
- `index.html` - base page
- `script.js` - state, `save()` / `load()` (localStorage), `render()` and TODO function stubs
- `package.json` - `npm start` serves this folder

## Run locally
```bash
npm start   # or simply open index.html in your browser
```

## Deploy
Any static host works (for example GitHub Pages, Netlify or Vercel). There is no build step.

## Suggested pacing
- Hour 1: read this README, agree on a plan and split the work
- Hours 2-4: build the core tasks
- Hour 5: integrate, polish, then bonus tasks if time allows
- Hour 6: deploy, open the Pull Request, submit on the MLH platform (OrganizerHQ)

## Submission checklist
- [ ] All core tasks work end to end
- [ ] Project is deployed and the live link opens
- [ ] Pull Request created on the Voyage GitHub repository assigned to your team
- [ ] Project submitted on the MLH platform (OrganizerHQ) - instructions are shared at the start of the event

## Rules
- Build new features on top of this starter project and integrate them.
- Teams of 3-4; every member must be present.
- AI tools and open-source / open-weight models are fully allowed.
