import { Data } from "./data.js"
import "./index.css"

const PeopleData = function(obj)
{
    return(
        <>
            <div>
                <h1 > {obj.person1.name} </h1> 
                <h2 > {obj.person1.class} </h2>
                <h2 > {obj.person1.hobbies.join(",")}</h2> 
            </div>
        </>
    );
}



function App() {
  return(
    <>
        {
            Data.map(person => <PeopleData person1={person}/>)
        }
    </>
  )
}

export default App;

