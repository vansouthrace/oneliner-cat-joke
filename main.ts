import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My cat knocked my laptop off the table, sat in the exact spot where my code was, and stared at me like I was the one who did not understand the assignment.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
