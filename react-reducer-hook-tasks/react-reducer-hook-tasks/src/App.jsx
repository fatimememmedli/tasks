import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenuAppBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MediaCard from "./Components/Cardss";
import Footer from "./Components/Footer";

function App() {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div>
      {" "}
      {MenuAppBar()}
      <Hero
        value={value}
        setValue={setValue}
        search={search}
        setSearch={setSearch}
      />
      <Footer />
    </div>
  );
}

export default App;
