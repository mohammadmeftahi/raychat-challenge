import { ClientAdminMessage } from "./ClientAdminMessage";
import { ClientUserMessage } from "./ClientUserMessage";

interface Message {
  id: string;
  text: string;
  clientId: string;
  timestamp: Date;
  isFromAgent: boolean;
}

export const ClientChatHistory = ({ messages }: { messages: Message[] }) => {
  return (
    <section className="py-2 flex flex-col flex-1 gap-2 px-3 overflow-y-auto">
      {messages.map((msg) =>
        msg.isFromAgent ? (
          <ClientAdminMessage key={msg.id} text={msg.text} />
        ) : (
          <ClientUserMessage key={msg.id} text={msg.text} />
        )
      )}
    </section>
  );
};
