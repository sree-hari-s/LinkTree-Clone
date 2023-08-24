import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="p-m-4">
      <Router>
        <Routes>
        <Route path="/" element={<Socials />}></Route>
          <Route path="/:username" element={<Socials />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
