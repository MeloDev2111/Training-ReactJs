import logo from './logo.svg';
import './Home.css';
import Links from './Links';
import "./Links.css"
import {Link} from "react-router-dom";

const redes = [
   {
      key :1,
      name: "Google",
      link: "https://www.google.com.br/"
   },
   {
      key:2,
      name: "Youtube",
      link: "https://www.youtube.com/"
   }
];

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1 className="title">Training React JS</h1>
            <div className="logo-container">
               <img src={logo} className="App-logo" alt="logo" />
               <h3>By: MeloDev</h3>
            </div>
            <h2>
               <code>Mini Projects</code>
            </h2>
            
            <nav>
               <ol>
                  <li>
                     <Link to="/clock" target="_blank">Clock</Link>
                  </li>
                  <li>
                     <Link to="/counter" target="_blank" >Counter</Link>
                  </li>
               </ol>
            </nav>
            <h2>EN PROCESO</h2>
            <Links links={redes} />
         </header>
         
      </div>
   );
}

export default App;
