// Markdown Notes - Hack Day Haldia x GRID community starter. Build the core tasks from README.md.
const KEY = "hackday-haldia-team-matrix";
const $ = (sel) => document.querySelector(sel);

// App state - reshape it to fit your project.
let state = { items: [] };

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage blocked */ }
}

function load() {
  try { state = JSON.parse(localStorage.getItem(KEY)) || state; } catch (e) { /* ignore */ }
}

function render() {
  // TODO: draw your UI into #app
}

// ---- TODO(core): fill these in -------------------------------------------
// TODO(core): Markdown text -> HTML
function parseMarkdown() {
}

// TODO(core): autosave the open note
function saveNote() {
}

// TODO(core): full-text + tag search
function searchNotes() {
}

// TODO(core): draw the notes sidebar
function renderNoteList() {
}

// TODO(core): download as .md / .html
function exportNote() {
}


document.addEventListener("DOMContentLoaded", () => {
  load();
  $("#status").textContent = "script.js loaded.";
  render();
});
