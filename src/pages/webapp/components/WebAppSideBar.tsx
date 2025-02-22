import clsx from "clsx";
import { useWebAppStore } from "../../../store/webAppStore";

interface Client {
  id: string;
  name: string;
}

interface Props {
  clients: Client[];
}

export const WebAppSideBar = ({ clients }: Props) => {
  const { selectedClientId, setSelectedClientId } = useWebAppStore();

  return (
    <aside className="flex flex-col max-w-[236px] min-w-32">
      <h2 className="text-xl p-6">لیست کاربران</h2>
      <section className="flex flex-col">
        {clients.length === 0 && (
          <p className="text-xs text-center text-orange-400">
            کاربر فعالی وجود ندارد
          </p>
        )}
        {clients?.map((client) => (
          <button
            key={client.id}
            className={clsx(
              "text-right py-3 text-sm flex gap-1 border border-gray-alpha ps-6 cursor-pointer",
              {
                "bg-gray-alpha": selectedClientId === client.id,
              }
            )}
            onClick={() => setSelectedClientId(client.id)}
          >
            <span className="text-gray-beta">کاربر:</span>
            <span>{client.name}</span>
          </button>
        ))}
      </section>
    </aside>
  );
};
