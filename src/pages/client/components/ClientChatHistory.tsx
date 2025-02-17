import { ClientAdminMessage } from "./ClientAdminMessage";
import { ClientUserMessage } from "./ClientUserMessage";

export const ClientChatHistory = () => {
  return (
    <section className="py-2 flex flex-col flex-1 gap-2 px-3 overflow-y-auto">
      <ClientAdminMessage />
      <ClientUserMessage />
    </section>
  );
};
