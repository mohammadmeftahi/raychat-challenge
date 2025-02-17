import { ClientOnlineStatusBadge } from "./ClientOnlineStatusBadge";

type AvatarProps = {
  isOnline?: boolean;
  size?: "big" | "small";
};

export const ClientAvatar = ({ isOnline, size = "small" }: AvatarProps) => {
  return (
    <section
      className={`relative rounded-full bg-purple-alpha flex items-center justify-center border-[1.5px] border-white ${
        size === "small" ? "size-[30px]" : "size-9"
      }`}
    >
      <span className="text-[13px]">JD</span>
      {isOnline && <ClientOnlineStatusBadge />}
    </section>
  );
};
