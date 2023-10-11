import React from "react";
import { useContext } from "react";
import { ApiData } from "../App";

const Ds=()=>{

    const responseData = useContext(ApiData);
    return(
        
        <div>
          {responseData.map(user =>(

            <div >
                 <h1 key={user.id}>{user.email}</h1>
                  <h1 key={user.id}>{user.id}</h1>
                  <h1 key={user.id}>{user.phone}</h1>
            </div>
           
          
          ))}
        </div>
         
    )
}

export default Ds;