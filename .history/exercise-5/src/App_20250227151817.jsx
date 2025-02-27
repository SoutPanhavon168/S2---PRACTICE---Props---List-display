import Data from "./data.js"
import "./index.css"

const PeopleData = function(obj)
{
    return(
        <>
            <div>
                <h1> {obj.person.name} </h1> 
                <h2> {obj.person.class} </h2>
                <h2> 
                    {
                        obj.person.hobbies.join(",")
                    }
                </h2> 
            </div>
        </>
    );
}



function App() {
  return(
    <>
        {
            Data.map(person => <PeopleData person={person}/>)
        }
    </>
  )
}

export default App;
import Data from "./data.js";
import "./index.css";

const PeopleData = function(obj) {
    return (
        <>
            <div>
                <h1> {obj.person.name} </h1> 
                <h2> {obj.person.class} </h2>
                <h2> {obj.person.hobbies.join(", ")} </h2> 
            </div>
        </>
    );
}

function App() {
    return (
        <>
            {
                Data.map(person => <PeopleData person={person} />)
            }
        </>
    );
}

export default App;
