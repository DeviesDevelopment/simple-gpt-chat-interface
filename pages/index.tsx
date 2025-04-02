// pages/index.tsx
"use client";

import { v4 as uuidv4 } from "uuid";
import { ChatWindow } from "../components/ChatWindow";

export default function ChatPage() {
  return (
    <main>
        <ChatWindow conversationId={uuidv4()}></ChatWindow>
    </main>
  )
}
