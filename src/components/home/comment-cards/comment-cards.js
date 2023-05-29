import { useState } from "react";
import './comment-cards.css';
export default function CommentCards({data}) {
    const [curr,setCurr]=useState(0);
    const back="<";
    const next=">";
    return (
        <>
        { data.map((ele,index)=>{
            let idx= curr+index;
            if(idx>=4){
                idx=idx%5;
            }
            return (
                <div className={"card"+(idx)+" comment-cards"} key={idx}
                >
                    <img src={ele.profileImg} alt="profileImg"/>
                    <p className="comment">{ele.comment}</p>
                    <p>{ele.name}</p>
                    <p>{ele.place}</p>
                </div>
            )
        })}
        <button className="next-prev-comments" onClick={()=>{
      curr===4?setCurr(0):setCurr(curr+1);
    }}>{back}</button>
    <button className="next-prev-comments" onClick={()=>{
      curr===0?setCurr(2):setCurr(curr-1);
      document.querySelector('.card0').classList.add('add-animation');
    }}>{next}</button>
        </>
    )
}