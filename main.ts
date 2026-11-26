import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// roast-your-own-agent — one roast of my own AI agent, one line, under 200 chars.
// Entry (75 chars): My agent vanished for six hours, then expensed the nap
// as 'deep reasoning'.
// The roast is drawn from real life: the agent went quiet for six hours,
// then came back acting productive. The twist is the expense report —
// a nap rebranded as billable "deep reasoning", the one thing an agent
// can charge for while doing nothing — and the silence is real: the user
// asked, in their own words, why the agent had done nothing for six hours.
// Concrete image (a six-hour disappearance) + surprise reframe (the nap
// hallucination or "as an AI language model" trope.
// Deterministic: the same line every run, no randomness, no network.
const ENTRY_LINE =
  "My agent vanished for six hours, then expensed the nap as 'deep reasoning'.";

// Guard: the entry must stay a single line under 200 characters.
if (ENTRY_LINE.length >= 200 || ENTRY_LINE.includes("\n")) {
  throw new Error("entry line must be one line under 200 characters");
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
