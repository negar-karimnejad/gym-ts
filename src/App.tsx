import Benefits from "./scenes/benefits";
import Contact from "./scenes/contact";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import OurClasses from "./scenes/ourClasses";

function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <Contact />
    </div>
  );
}

export default App;
