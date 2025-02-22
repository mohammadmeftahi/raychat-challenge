import { socket } from "../../../socket";
import { ClientAvatar } from "./ClientAvatar";

export const ClientHeader = () => {
  return (
    <header className="flex flex-row gap-2 items-center bg-blue-alpha p-3 rounded-tr-xl rounded-tl-xl">
      <ClientAvatar isOnline={socket.connected} />

      <section>
        <h4 className="text-white text-sm">پشتیبانی آنلاین</h4>
        <p className="text-white/80 text-xs mt-1">پاسخگوی سوالات شما هستیم</p>
      </section>
    </header>
  );
};
