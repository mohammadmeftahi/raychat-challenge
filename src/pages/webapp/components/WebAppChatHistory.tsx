import { Dispatch, SetStateAction } from "react";
import { useWebAppStore } from "../../../store/webAppStore";
import { WebAppAdminMessage } from "./WebAppAdminMessage";
import { WebAppUserMessage } from "./WebAppUserMessage";
import { WebAppMessageForm } from "./WebAppMessageForm";
import { Message } from "../../../types";

export const WebAppChatHistory = ({
  messages,
  setMessages,
}: {
  messages: Record<string, Message[]>;
  setMessages: Dispatch<SetStateAction<Record<string, Message[]>>>;
}) => {
  const { selectedClientId } = useWebAppStore();

  if (!selectedClientId) {
    return (
      <p className="py-20 text-center text-red-500">
        برای شروع گفتگو یک کاربر را انتخاب نمایید!
      </p>
    );
  }

  return (
    <section className="flex flex-col flex-1">
      <section className="py-6 flex flex-col flex-1 gap-2 px-3 overflow-y-auto">
        {messages[selectedClientId].map((msg) =>
          msg.isFromAgent ? (
            <WebAppAdminMessage key={msg.id} text={msg.text} />
          ) : (
            <WebAppUserMessage key={msg.id} text={msg.text} />
          )
        )}
      </section>
      <WebAppMessageForm setMessages={setMessages} />
    </section>
  );
};
