  import React from "react";
  import {useContext } from "react";
  import { ApiData } from "../App";

const Five=()=>{

    const data = useContext(ApiData);
    return(
        
        <div>
          {data.map(user =>(
            <h1 key={user.id}>{user.name}</h1>
            
          ))}
        </div>
         
    )
}


export default Five;