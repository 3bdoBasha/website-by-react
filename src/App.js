import {React,useState} from "react"
import './App.css';
import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
function App() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(0)

  const posts = [
  {id:1 ,head:"لقد صنعت نواة لينكس ما رأيكم بها", views:"30 Views" ,content:"Writed By Abdo",like:"Like💖",mycount:{count},myset:{setCount}},
  {id:2 ,head:"أحب البرمجة هل من أحد يعطيني نصائح؟", views:"50 Views" ,content:"Writed By Abdo",like:"Like💖",mycount:{count2}},
  {id:2 ,head:"🛠️الحل لجميع مشاكل البرمجة فهم أساسيات اللغة أولا ثم إختيار المسار الذي تريد",views:"100 Views",content:"Writed By Web Developer",like:"Like💖",mycount:{count3}},
];

const myPosts = posts.map((post) => {
  return (
    <div key={post.id} className="post">
      <span id="post-header">{post.head}</span>
      <hr />
      <p>{post.content}</p>
      {post.views}
      <br /><br />
      <button id="like-btn">{post.like}</button>
      <br /><br />
      <span>Likes : </span>
      
    </div>
  )
});


  return (
    <div>
    <Header />
    {/* <Post head="لقد صنعت نواة لينكس ما رأيكم بها؟؟" views="30 Views" content="Writed By Abdo">
    <div>
        <br></br>
        <button id="like-btn" onClick={()=>{setCount(count + 1)}}>Like💖</button>
        <br></br>
        <br></br>
        <span>Likes: {count}</span>
      </div>
    </Post>
    <Post head="أحب البرمجة هل من أحد يعطيني نصائح؟؟" content="Writed By Ahmed" views="50 Views">
    <div>
        <br></br>
        <button id="like-btn" onClick={()=>{setCount2(count2 + 1)}}>Like💖</button>
        <br></br>
        <br></br>
        <span>Likes: {count2}</span>
      </div>
    </Post> 
    <Post head="🛠️الحل لجميع مشاكل البرمجة تعلم أساسياتها أولا ، ثم الإتجاه للمسار الذي تريد" content="Writed By The Web Developer (Abdulrhaman)" views="100 Views">
      <div>
        <br></br>
        <button id="like-btn" onClick={()=>{setCount3(count3 + 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)}}>Like💖</button>
        <br></br>
        <br></br>
        <span>Likes: {count3}</span>
      </div>
    </Post> */}
    <div className="side">   
      <SideMenu />
    </div>
  </div>
  );
}


// USE ONCLICK => OnClick{()=>{setCount(count+1)}}

// حركة الــ button استعنت بالكورس

export default App;


