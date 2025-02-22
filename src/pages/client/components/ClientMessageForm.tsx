import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import { socket } from "../../../socket";
import { useClientStore } from "../../../store/clientStore";

export const ClientMessageForm = () => {
  const { clientId } = useClientStore();
  const [value, setValue] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const sendMessage = () => {
    if (value.trim().length > 0) {
      console.log("emit user message");
      socket.emit("user-message", { clientId: clientId, text: value });
      setValue("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <form
      className="flex gap-1.5 mb-4 px-2.5 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <section className="flex flex-1 px-2 border border-gray-alpha rounded-xl shadow-beta gap-2">
        <button type="button">
          <img src="/images/voice-icon.svg" alt="Voice" />
        </button>

        <textarea
          placeholder="اینجا بنویسید ..."
          value={value}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          className={clsx(
            "resize-none flex flex-1 focus-visible:outline-0 text-black/50 h-[42px] text-xs placeholder-black/50",
            { "leading-[42px]": value.length === 0 },
            { "pt-[14px]": value.length > 0 }
          )}
        ></textarea>

        <button type="button">
          <img src="/images/emoji-icon.svg" alt="Emoji" />
        </button>

        <button type="button">
          <img src="/images/attachment-icon.svg" alt="Attachment" />
        </button>
      </section>

      <button
        type="submit"
        className="shadow-beta bg-gray-alpha size-[42px] rounded-full flex items-center justify-center"
      >
        <img src="/images/send-icon.svg" alt="Send" />
      </button>
    </form>
  );
};
