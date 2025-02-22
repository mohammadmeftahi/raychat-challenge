export const WebAppUserMessage = ({ text }: { text: string }) => {
  return (
    <section className="flex flex-row-reverse gap-2 self-end">
      <section className="bg-purple-beta py-4 px-5   border border-gray-alpha max-w-48 rounded-xl !rounded-bl-none shadow-alpha">
        <p className="leading-5 text-white text-xs">{text}</p>
      </section>
    </section>
  );
};
