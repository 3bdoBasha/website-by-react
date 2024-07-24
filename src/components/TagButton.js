import "../App.css"

export default function TagButton({content,children}){
    return(
        <button id="tag">
            {content}
            {children}
        </button>
        
    )
}