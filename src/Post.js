import "./App.css";
export default function Post(){
    return(
        <div className="post" style={{
            padding: "10px",border: "solid teal 5px", width: "50%",margin: "25px"
            }}>
            <span style={{fontSize: "20px"}}>This is the Post Title</span>
            <hr />
            <p>This is the Post body</p>
        </div>
    );
}

