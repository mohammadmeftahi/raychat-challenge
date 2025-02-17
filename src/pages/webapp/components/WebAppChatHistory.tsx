import { WebAppAdminMessage } from "./WebAppAdminMessage";
import { WebAppUserMessage } from "./WebAppUserMessage";

export const WebAppChatHistory = () => {
  return (
    <section className="py-6 flex flex-col flex-1 gap-2 px-3 overflow-y-auto">
      <WebAppAdminMessage />
      <WebAppUserMessage />
    </section>
  );
};
