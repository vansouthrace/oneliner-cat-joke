// The One-Line Cat Joke That Lands — one cat joke (max 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The cat sat on my keyboard, typed 'asdkfj', and my agent shipped it to production and called it a feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
