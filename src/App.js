import React from "react"
import './App.css';
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div>
    <Header />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <div style={{display: "flex",justifyContent: "right",marginTop: "-50%",padding:"5px"}}>   
      <SideMenu />
    </div>
    </div>
  );
}

export default App;
