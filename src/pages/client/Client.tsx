import {
  ClientHeader,
  ClientChatHistory,
  ClientMessageForm,
} from "./components";

export function Client() {
  return (
    <section className="flex flex-col h-screen">
      <ClientHeader />
      <ClientChatHistory />
      <ClientMessageForm />
    </section>
  );
}
