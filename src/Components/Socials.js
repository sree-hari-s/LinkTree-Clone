import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import Links from "./Links";

function Socials() {
    const { username } = useParams();
    console.log(username);
    const [profile, setProfile] = useState({
        name: "404",
        bio: "-",
        avatar:
            "https://github.com/sree-hari-s/My-Portfolio-master/blob/master/assets/images/dp_male.svg",
        links: [],
    });
    useEffect(() => {
        fetch(`/React-test/data/${username}.json`)
            .then((response) => response.json())
            .then((data) => setProfile(data));
    }, [username]);
    return (
        <div>
            <Profile
                name={profile.name}
                bio={profile.bio}
                avatar={profile.avatar}
                total={profile.links.length}
            />
            <Links links={profile.links} />
        </div>
    );
}
export default Socials;
