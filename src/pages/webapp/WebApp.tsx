import { useEffect, useState } from "react";

import { WebAppSideBar, WebAppChatHistory } from "./components";
import { Conversation, Message } from "../../types";
import { socket } from "../../socket";

export const WebApp = () => {
  const [clients, setClients] = useState([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});

  useEffect(() => {
    socket.emit("register-agent", { clientId: "agent-1", name: "agent" });
  }, []);

  useEffect(() => {
    socket.on("existing-conversations", (data) => {
      console.log(data);
      const { conversations, clients } = data;

      const initialMessages: Record<string, Message[]> = {};

      for (const conversation of conversations) {
        initialMessages[conversation.clientId] = conversation.messages;
      }

      setClients(clients ?? []);
      setMessages(initialMessages);

      if (!clients || clients.length === 0) {
        console.error("No clients received!");
      }
    });

    return () => {
      socket.off("existing-conversations");
    };
  }, []);

  useEffect(() => {
    socket.on(
      "new-user-message",
      ({ conversation }: { conversation: Conversation }) => {
        setMessages((prevMessages) => {
          const messages = { ...prevMessages };
          prevMessages[conversation.clientId] = conversation.messages;
          return messages;
        });
      }
    );

    return () => {
      socket.off("new-user-message");
    };
  }, []);

  return (
    <section className="flex flex-1 min-h-screen">
      <WebAppSideBar clients={clients} />
      <main className="flex flex-1 flex-col bg-gray-gama">
        <WebAppChatHistory messages={messages} setMessages={setMessages} />
      </main>
    </section>
  );
};
