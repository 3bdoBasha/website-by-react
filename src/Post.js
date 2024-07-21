import "./App.css";
export default function Post({views,content,head,children}){
    return(
        <div className="post" style={{
            padding: "10px",border: "solid teal 5px", width: "50%",margin: "25px"
            }}>
            <span style={{fontSize: "20px"}}>{head}</span>
            <hr />
            <p>{content}</p>
            {children}
            {views}
        </div>
    );
}

