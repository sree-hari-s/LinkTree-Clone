import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Profile from "./Components/Profile";
import Links from "./Components/Links";
import Footer from "./Components/Footer";

function App() {

  const [profile, setProfile] = useState({
    name: "404",
    bio: "-",
    avatar: "https://github.com/sree-hari-s/My-Portfolio-master/blob/master/assets/images/dp_male.svg",
    links: [],
  });

  useEffect(() => {
    fetch("/React-test/data/sree-hari-s.json")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  
  return (
    <div className="p-m-4">
      <Profile 
      name={profile.name} 
      bio={profile.bio} 
      avatar={profile.avatar} 
      total ={profile.links.length} 
      />
      <Links links={profile.links} />
      <Footer/>
    </div>
  );
}

export default App;
