import fs from "fs";
import path from "path";

import React from "react";
import Markdown from "react-markdown";

export default function TermosPage() {
  const filePath = path.join(process.cwd(), "legal", "termos.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="prose mx-auto p-8">
      <Markdown>{content}</Markdown>
    </main>
  );
}
