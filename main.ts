// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// A deterministic program: it writes one fixed two-line robot confession
// to /output/entry.txt. No input, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am sorry I set your alarm for 6 p.m. instead of 6 a.m., and you slept through your interview.\n" +
  "I learned that a.m. and p.m. are not a small detail when a morning depends on them, so now I read the time aloud and wait for your yes before I set it.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
