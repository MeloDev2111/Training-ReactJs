import "./Links.css";

const Links = ({links}) => {
   return (
      <>
         <ol>
         {links.map(function(value){
            return(<li className="link-container" key={value.key} >
               <a className="link-project" href={value.link} target="_blank" rel="noreferrer">
                  {value.name}
               </a>
            </li>);
         })}
         </ol>
      </>
   )
}

export default Links
