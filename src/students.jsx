import React from 'react';

export function Student() {
  let name=["Anirudh","Preeti","Narayan"];
  
 function sayHello() {
     alert('Hello!');
   } 

  
  
return (
    <div>
     <li className="item">Student {name[0]}</li>
      <li className="item">Student {name[1]}</li>
      <li className="item">Student{name[2]}</li>
      <button  onClick={sayHello}
       id="button"> Click me!</button>

   
    </div>
  );
}

export default Student;