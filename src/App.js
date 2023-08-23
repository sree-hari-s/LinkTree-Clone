import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import {Avatar} from "primereact/avatar";
import {Badge} from "primereact/badge";

function App() {
  return (
    <div className="p-d-flex p-jc-center p-ai-center">
      <Avatar image="/logo512.png" size="xlarge">
        <Badge value="4" severity="danger"/>
      </Avatar>
      <p>Testing LinkFree</p>
    </div>
  );
}

export default App;
