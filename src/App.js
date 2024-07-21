import React from "react"
import './App.css';
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
import "./imgs/Image.jpg"
function App() {
  return (
    <div>
    <Header />
    <Post head="لقد صنعت نواة لينكس ما رأيكم بها؟؟" content="Writed By Abdo" views="30 Views">
    </Post>
    <Post head="أحب البرمجة هل من أحد يعطيني نصائح؟؟" content="Writed By Ahmed" views="50 Views"></Post>
    <Post head="🛠️الحل لجميع مشاكل البرمجة تعلم أساسياتها أولا ، ثم الإتجاه للمسار الذي تريد" content="Writed By Ali" views="70 Views"></Post>
    <div style={{display: "flex",justifyContent: "right",marginTop: "-50%",padding:"5px"}}>   
      <SideMenu />
    </div>
    </div>
  );
}

export default App;
