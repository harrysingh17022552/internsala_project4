import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
function App() {
  //this State manage User, currently it takes dummy user and passes it to HEader Component.
  const [user, setUSer] = useState({ fname: "Harish", lname: "Nigam" });
  return (
    <main className="flex flex-col gap-8 w-full h-screen overflow-scroll noscrollbar">
      {/* Header Component */}
      <Header user={user} />

      {/* this render pages dynamically, as url path changes, it checks children and render pages  */}
      <Outlet/>
    </main>
  );
}

export default App;
