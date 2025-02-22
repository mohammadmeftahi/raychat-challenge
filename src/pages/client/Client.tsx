import { useEffect, useState } from "react";
import {
  ClientHeader,
  ClientChatHistory,
  ClientMessageForm,
} from "./components";
import { useClientStore } from "../../store/clientStore";
import { Conversation, Message } from "../../types";
import { socket } from "../../socket";

export const Client = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { clientId } = useClientStore();

  useEffect(() => {
    const name = "client-" + clientId.substring(0, 4);

    socket.emit("register-user", { clientId, name });
  }, [clientId]);

  useEffect(() => {
    socket.emit(
      "get-client-conversations",
      { clientId },
      (response: { success: boolean; data: Conversation }) => {
        if (response.success) {
          setMessages(response.data.messages);
        }
      }
    );
  }, [clientId]);

  useEffect(() => {
    socket.on("message", updateMessages);

    return () => {
      socket.off("message", updateMessages);
    };
  }, []);

  function updateMessages(message: Message) {
    setMessages((prev) => [...prev, message]);
  }

  return (
    <section className="flex flex-col h-screen">
      <ClientHeader />
      <ClientChatHistory messages={messages} />
      <ClientMessageForm />
    </section>
  );
};
