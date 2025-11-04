import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
function App() {
  const [user, setUSer] = useState({ fname: "Harish", lname: "Nigam" });
  return (
    <main className="flex flex-col gap-8 w-full h-screen overflow-scroll noscrollbar">
      <Header user={user} />
      <Outlet/>
    </main>
  );
}

export default App;
