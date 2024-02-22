"use client";

import { useState } from "react";
import { Chapter as ChapterType } from "@/types";

export default function Chapter({ content, task, sql }: ChapterType) {
  const [showSolution, setShowSolution] = useState(false);

  // new©˙˙˙åapter

  return (
    <section className="my-10">
      <main>
        {content.map((content, i) => (
          <p key={i} className="text-gray-500 leading-6 mb-5">
            {content}
          </p>
        ))}
      </main>

      <footer className="flex flex-wrap">
        <p className="font-medium">{task}</p>
        <button
          className="ml-2 text-sm"
          onClick={() => setShowSolution(!showSolution)}
        >
          (<u>{showSolution ? "verstecke lösung" : "zeige lösung"}</u>)
        </button>
        {showSolution && (
          <pre className="w-full text-sm">
            <code>{sql}</code>
          </pre>
        )}
      </footer>
    </section>
  );
}
