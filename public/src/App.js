import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./component/ProfileCard";
import ProfileForm from "./component/ProfileForm";


function App() {

  const [allProfile, setAllProfile] = useState([{
    firstName:"star",
    lastName:"Emak",
    email:"star@gmail.com",
    phone:"+233 2456789"
  }])

  const submit =(profile)=>{
    const arr = allProfile
    arr.push(profile)
    setAllProfile(arr)
  }

  return (
    <div className="App">
      <h1>Writer Profiles.</h1>
      <div className="container">
        <ProfileForm submit={submit}/>
        {
          allProfile.map((writer)=>(
            <ProfileCard key={writer.id} writer={writer}/>
          ))
        }
      </div>
    </div>

  );
}

export default App;
