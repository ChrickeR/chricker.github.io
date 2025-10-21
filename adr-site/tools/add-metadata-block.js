#!/usr/bin/env node
import fs from "fs"; import path from "path"; import yaml from "js-yaml";
const adrDir = path.resolve("docs/adr");
if (!fs.existsSync(adrDir)) process.exit(0);
for (const file of fs.readdirSync(adrDir).filter(f=>f.endsWith(".md"))) {
  if (file.startsWith("_TEMPLATE")) continue;
  const full = path.join(adrDir, file);
  const text = fs.readFileSync(full, "utf-8");
  if (text.includes("> **Domain:**")) continue;
  const m = text.match(/^---([\s\S]*?)---/); if (!m) continue;
  const fm = yaml.load(m[1])||{};
  const list = v => Array.isArray(v)?v.join(", "):(v||"—");
  const block = [
    `> **Domain:** ${fm.domain||"—"}`,
    `> **Subdomain:** ${fm.subdomain||"—"}`,
    `> **Bounded Context:** ${fm.bounded_context||"—"}`,
    `> **Team:** ${fm.team||"—"}`,
    `> **Decision Owners:** ${list(fm.decision_owners)}`,
    `> **Supersedes:** ${list(fm.supersedes)}`,
    `> **Superseded by:** ${list(fm.superseded_by)}`,
    `> **Related:** ${list(fm.related)}`
  ].join("  \n");
  const updated = text.replace(m[0], `${m[0]}\n\n${block}\n\n`);
  fs.writeFileSync(full, updated, "utf-8");
  console.log("✔ Added metadata block:", file);
}
console.log("✅ Done");
