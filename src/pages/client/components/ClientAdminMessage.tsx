import { ClientAvatar } from "./ClientAvatar";

export const ClientAdminMessage = ({ text }: { text: string }) => {
  return (
    <section className="flex gap-2">
      <ClientAvatar />

      <section className="p-2 border border-gray-alpha max-w-48 rounded-lg !rounded-br-none shadow-alpha">
        <p className="leading-5 text-black/80 text-xs">{text}</p>
      </section>

      <p className="self-center text-[8px] text-black-alpha">۱۱:۲۳ ب.ظ</p>
    </section>
  );
};
