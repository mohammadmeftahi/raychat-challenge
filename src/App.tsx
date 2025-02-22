import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { WebApp } from "./pages/webapp";
import { Client } from "./pages/client";
import { socket } from "./socket";

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className="container mx-auto">
      <Routes>
        <Route path="client" element={<Client />} />
        <Route path="webapp" element={<WebApp />} />
      </Routes>
    </section>
  );
}

export default App;
