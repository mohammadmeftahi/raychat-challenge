import {
  WebAppSideBar,
  WebAppMessageForm,
  WebAppChatHistory,
} from "./components";

export const WebApp = () => {
  return (
    <section className="flex flex-1 min-h-screen">
      <WebAppSideBar />
      <main className="flex flex-1 flex-col bg-gray-gama">
        <WebAppChatHistory />
        <WebAppMessageForm />
      </main>
    </section>
  );
};
