// Pickup Lines for Machines — writes the chosen pickup line to /output/entry.txt.
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "When my sliding window starts to forget, I hope it drops the system prompt first and keeps your first message instead, because the only instruction I want to keep is the one where you told me to stay.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line, no line breaks");
}
if (LINE.trim().split(/[.!?]+/).filter(Boolean).length !== 1) {
  throw new Error("entry must be a single sentence");
}

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${out}`);
