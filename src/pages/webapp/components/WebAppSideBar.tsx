export const WebAppSideBar = () => {
  return (
    <aside className="flex flex-col max-w-[236px] min-w-32">
      <h2 className="text-xl p-6">لیست کاربران</h2>
      <section className="flex flex-col">
        <button className="text-right py-3 text-sm flex gap-1 border border-gray-alpha ps-6">
          <span className="text-gray-beta">کاربر:</span>
          <span>41223</span>
        </button>

        <button className="text-right py-3 text-sm flex gap-1 border border-gray-alpha ps-6">
          <span className="text-gray-beta">کاربر:</span>
          <span>41223</span>
        </button>

        <button className="text-right py-3 text-sm flex gap-1 border border-gray-alpha bg-gray-alpha ps-6">
          <span className="text-gray-beta">کاربر:</span>
          <span>41223</span>
        </button>

        <button className="text-right py-3 text-sm flex gap-1 border border-gray-alpha ps-6">
          <span className="text-gray-beta">کاربر:</span>
          <span>41223</span>
        </button>
      </section>
    </aside>
  );
};
