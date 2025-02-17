import { Route, Routes } from "react-router";
import "./App.css";
import { WebApp } from "./pages/webapp";
import { Client } from "./pages/client";

function App() {
  return (
    <section className="container mx-auto">
      <Routes>
        <Route index element={<Client />} />
        <Route path="webapp" element={<WebApp />} />
      </Routes>
    </section>
  );
}

export default App;
