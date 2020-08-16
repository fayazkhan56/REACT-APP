import React, { useState } from 'react';
import './room.css';
function Room() {

  let (islit, setlit)=useState(false);
  let (age  , setage)=useState(24);

  
    return (
      <div className={'room ${islit? "lit" : "dark"}'}>
         This room is (islit? lit : dark);
       <br/>
        age : (age)
       <br/>
      
        <button onClick={()=> setlit(!setlit)} >light button</button>

        <button>
          onClick{ () => setage(++age)} increase age 
        </button>
          </div>
    );
  }