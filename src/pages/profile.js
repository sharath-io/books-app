import { useContext } from "react";
import { BookContext } from "../index"


export function Profile(){
    const {profileData} = useContext(BookContext);
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <img src={profileData.img} alt={profileData.name} className="profile-img"/>
                <h2>Name: {profileData.name}</h2>
                <p>Bio: {profileData.bio}</p>
            </div>
        </div>
    )
}