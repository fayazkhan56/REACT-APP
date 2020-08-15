import React from 'react';
import logo from './logo.svg';
import './App.css';
import './hello.css';

function App({name}) {
return <div className="myround">
    hello world from <strong>{name}</strong> 
    <h1 className="h1">this is heading now</h1>
    <p>we will put now some ordered lists</p>
      <ol class="ol">
            <li>apple</li>
            <li>banana</li>
            <li>peach</li>

      </ol>
      <p>  look now for unorderd list</p>
         <ul className="ul">
            <li>apple</li>
            <li>banana</li>
            <li>peach</li>
         </ul>
    </div>
     
}

export default App;
