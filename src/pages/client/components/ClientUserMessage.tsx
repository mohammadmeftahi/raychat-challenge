export const ClientUserMessage = ({ text }: { text: string }) => {
  return (
    <section className="flex flex-row-reverse gap-2 self-end">
      <section className="p-2 bg-blue-alpha border border-gray-alpha max-w-48 rounded-lg !rounded-br-none shadow-alpha">
        <p className="leading-5 text-white text-xs">{text}</p>
      </section>

      <p className="self-center text-[8px] text-black-alpha">۱۱:۲۳ ب.ظ</p>
    </section>
  );
};
