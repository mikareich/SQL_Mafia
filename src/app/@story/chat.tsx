"use client";

import { useContext } from "react";
import Chapter from "./chapter";
import { StoryContext } from "./context";
import Table, { TableProps } from "@/components/table";
import { Chapter as ChapterType } from "@/types";

export default function Chat() {
  const { messages } = useContext(StoryContext);

  return (
    <div className="overflow-y-auto">
      <h1 className="text-3xl font-bold">SQL Mafia</h1>
      <hr />
      {messages.map((message) => (
        <div key={message.id}>
          {message.type === "table" ? (
            <Table {...(message.data as TableProps)} />
          ) : (
            <Chapter {...(message.data as ChapterType)} />
          )}
        </div>
      ))}
    </div>
  );
}
