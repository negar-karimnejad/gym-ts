import { useState } from "react";
import Benefits from "./scenes/benefits";
import Contact from "./scenes/contact";
import Footer from "./scenes/footer";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import OurClasses from "./scenes/ourClasses";

function App() {
  const [activeNavItem, setActiveNavItem] = useState<string>("Home");

  return (
    <div className="app bg-gray-20">
      <Navbar
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
      />
      <Home setActiveNavItem={setActiveNavItem} />
      <Benefits setActiveNavItem={setActiveNavItem} />
      <OurClasses setActiveNavItem={setActiveNavItem} />
      <Contact setActiveNavItem={setActiveNavItem} />
      <Footer />
    </div>
  );
}

export default App;
