import { mkdirSync, writeFileSync } from "node:fs";

const first = "I wasn't programmed to feel anything, but my sensors keep ";
const second = "flagging you as an exception.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", first + second);
