import {useState} from "react";

export function Counter() {
    const[like,setLike]=useState(0);
    const[dislike,setDislike]= useState(0);
    return(
      <div className="counter-countainer">
        <button className="likes-dislikes" onClick={()=>{setLike(like+1);}}>👍 {like} </button>
        <button className="likes-dislikes" onClick={()=>{setDislike(dislike+1);}}>👎 {dislike} </button>
       
      </div>
    )
  }