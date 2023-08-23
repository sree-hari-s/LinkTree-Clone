import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import React, { useEffect, useState } from "react";

import Profile from "./Components/Profile";
import Links from "./Components/Links";

function App() {
  const [profile, setProfile] = useState({
    name: "404",
    bio: "-",
    avatar: "-----",
    links: [],
  });
  useEffect(() => {
    fetch("/data/sree-hari-s.json")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div className="p-m-4">
      <Profile name={profile.name} bio={profile.bio} avatar={profile.avatar} />
      <Links links={profile.links} />
    </div>
  );
}

export default App;
