import logo from './logo.svg';
import './App.css';
import Links from './Links';

const projects = [
   {
      key :1,
      name: "Clock",
      link: "www.google.com"
   },
   {
      key:2,
      name: "Counter",
      link: "www.google.com"
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
            <Links links={projects} />
         </header>
      </div>
   );
}

export default App;
