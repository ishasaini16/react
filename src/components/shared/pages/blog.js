import React from "react";
import { useState } from "react";


function Blog(){
const[name, setname]=useState('Isha');
return (<>
  
        <h1>My Name is {name}</h1>
        <Blog2 user={name} />
   
    </>
    );
     


}

function Blog2({user}){
    return (
        <>  Hello {user} </>
      
        );

}
export default Blog;