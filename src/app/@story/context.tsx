"use client";

import { createContext, useEffect, useState } from "react";
import { Chapter } from "@/types";
import { TableProps } from "@/components/table";
import chapters from "@/utils/chapters";

type Message = {
  id: string;
  type: "table" | "chapter";
  data: TableProps | Chapter;
};

type ContextProps = {
  messages: Message[];
  append: (message: Message) => void;
  currentChapter: Chapter;
};

export const StoryContext = createContext<ContextProps>(null as any);

export default function StoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<Message[]>([
    { type: "chapter", data: chapters[0], id: "0" },
  ]);
  const [currentChapter, setCurrentChapter] = useState<Chapter>(chapters[0]);

  const append = (message: Omit<Message, "id">) => {
    const newMsg: Message = {
      ...message,
      id: Math.random().toString(),
    };

    setMessages((messages) => [...messages, newMsg]);
    if (message.type === "chapter") setCurrentChapter(message.data as Chapter);
  };

  return (
    <StoryContext.Provider value={{ messages, append, currentChapter }}>
      {children}
    </StoryContext.Provider>
  );
}
