import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

let curDate =new Date (2020, 5 , 5 , );
curDate =curDate.getHours();
let greeting =" ";
const cssStyle = { };
  


if (curDate >= 1 && curDate <12){
    greeting = "Good Morning";
    cssStyle.color ="green";
}
else if (curDate >=12 && curDate <19){
  greeting = "Good Afternoon";
  cssStyle.color ="orange";
} 
else  {
  greeting = " sleep is Not for Work ,  Good night ";
  cssStyle.color ="Red";
}



ReactDom.render(
  <>
  <div>

   
   
   <h1>
   
   
    Hello Sir, <span style ={cssStyle}>{greeting} </span> 
    </h1> </div> </>,

    
  document.getElementById("root")



);