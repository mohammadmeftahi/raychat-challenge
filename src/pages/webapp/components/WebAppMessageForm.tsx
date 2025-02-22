import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { useWebAppStore } from "../../../store/webAppStore";
import { Message } from "../../../types";
import { socket } from "../../../socket";

export const WebAppMessageForm = ({
  setMessages,
}: {
  setMessages: Dispatch<SetStateAction<Record<string, Message[]>>>;
}) => {
  const [value, setValue] = useState("");
  const { selectedClientId } = useWebAppStore();

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const sendMessage = () => {
    if (value.trim()) {
      socket.emit("agent-message", { clientId: selectedClientId, text: value });
      setValue("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
      const message: Message = {
        id: Date.now().toString(),
        text: value,
        clientId: selectedClientId as string,
        timestamp: new Date(),
        isFromAgent: true,
      };
      setMessages((prevMessages) => {
        const newConversation = [
          ...prevMessages[selectedClientId as string],
          message,
        ];
        return {
          ...prevMessages,
          [selectedClientId as string]: newConversation,
        };
      });
    }
  };

  return (
    <form
      className="flex mb-7 items-center px-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <section className="bg-white h-16 flex flex-1 border border-gray-delta rounded-xl">
        <textarea
          placeholder="اینجا بنویسید |"
          value={value}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          className="resize-none ps-4 flex flex-1 focus-visible:outline-0 text-black text-xs pt-6 placeholder-gray-theta"
        ></textarea>
        <section className="items-center flex pe-4">
          <button
            type="button"
            onClick={sendMessage}
            className="bg-purple-beta flex items-center justify-center h-[38px] gap-2.5 rounded-4xl px-2.5"
          >
            <span className="text-sm text-white">ارسال پیام</span>
            <img src="/images/send-icon.svg" alt="send message" />
          </button>
        </section>
      </section>
    </form>
  );
};
