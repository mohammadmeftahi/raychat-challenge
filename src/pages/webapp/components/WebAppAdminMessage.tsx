export const WebAppAdminMessage = ({ text }: { text: string }) => {
  return (
    <section className="flex gap-2">
      <section className="bg-white py-4 px-5 max-w-48 rounded-xl !rounded-br-none">
        <p className="leading-5 text-black/80 text-xs">{text}</p>
      </section>
    </section>
  );
};
