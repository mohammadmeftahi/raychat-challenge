import { ChangeEvent, useState } from "react";

export const WebAppMessageForm = () => {
  const [value, setValue] = useState("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="flex mb-7 items-center px-6">
      <section className="bg-white h-16  flex flex-1 border border-gray-delta rounded-xl">
        <button type="button" className="border-l border-l-gray-delta px-4">
          <img src="/images/bookmark-icon.svg" alt="" />
        </button>

        <textarea
          placeholder="اینجا بنویسید |"
          value={value}
          onChange={handleTextareaChange}
          className="resize-none ps-4 flex flex-1 focus-visible:outline-0 text-black text-xs pt-6 placeholder-gray-theta"
        ></textarea>

        <section className="items-center flex pe-4">
          <button className="bg-purple-beta flex items-center justify-center h-[38px] gap-2.5 rounded-4xl px-2.5">
            <span className="text-sm text-white">ارسال پیام</span>
            <img src="/images/send-icon.svg" alt="" />
          </button>
        </section>
      </section>
    </form>
  );
};
