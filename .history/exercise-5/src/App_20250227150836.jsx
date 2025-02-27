import Data from "./data.jsx"
import "./index.css"

const PeopleData = function(obj)
{
    return(
        <>
            <div>
                <h1> {obj.name} </h1> 
                <h2> {obj.class} </h2>
                <h2> 
                    {
                        obj.hobbies.map(p => p)
                    }
                </h2> 
            </div>
        </>
    );
}



function App() {
  return(
    <>
        <PeopleData obj={Data}/>
    </>
  )
}

export default App;
