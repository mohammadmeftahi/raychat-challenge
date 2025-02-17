import { ChangeEvent, useState } from "react";
import clsx from "clsx";

export const ClientMessageForm = () => {
  const [value, setValue] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="flex gap-1.5 mb-4 px-2.5 items-center">
      <section className="flex flex-1 px-2 border border-gray-alpha rounded-xl shadow-beta gap-2">
        <button type="button">
          <img src="/images/voice-icon.svg" alt="" />
        </button>

        <textarea
          placeholder="اینجا بنویسید ..."
          value={value}
          onChange={handleTextareaChange}
          className={clsx(
            "resize-none flex flex-1 focus-visible:outline-0 text-black/50 h-[42px] text-xs placeholder-black/50",
            { "leading-[42px]": value.length === 0 },
            { "pt-[14px]": value.length > 0 }
          )}
        ></textarea>

        <button type="button">
          <img src="/images/emoji-icon.svg" alt="" />
        </button>

        <button type="button">
          <img src="/images/attachment-icon.svg" alt="" />
        </button>
      </section>

      <button className="shadow-beta bg-gray-alpha size-[42px] rounded-full flex items-center justify-center">
        <img src="/images/send-icon.svg" alt="" />
      </button>
    </form>
  );
};
