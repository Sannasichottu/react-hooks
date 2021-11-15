
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";

export function Counter() {
    const[like,setLike]=useState(0);
    const[dislike,setDislike]= useState(0);
    return(
      <div className="counter-countainer">
       <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton> 

   {/* <Badge badgeContent ={like}  color = "primary"><MailIcon color ="action" /></Badge>
     */ } 
        <button className="likes-dislikes" onClick={()=>{setLike(like+1);}}>👍 {like} </button>
        <button className="likes-dislikes" onClick={()=>{setDislike(dislike+1);}}>👎 {dislike} </button>
       
      </div>
    )
  }