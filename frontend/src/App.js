import bg from "./assets/bg.jpg"
import bg1 from "./assets/bg1.jpg"
import bg2 from "./assets/bg2.jpg"
import bg3 from "./assets/bg3.jpg"
import {useState} from "react"

function App() {

  const [fname,setfname] = useState("")

  function handlename(evt)
  {
    setfname(evt.target.value)
  }

  return (
    <>

      <div className="mpart">
        <form action="http://localhost:5000/" method="post">
          <h1 id="head">Fruit Name🍓</h1>
          <input onChange={handlename} id="input" name="fruitName" placeholder="Enter The Fruit Name Here"></input><br></br>
          <button id="btn">Add Fruit</button>

        </form>
      </div>


      <div id="Center">
        <h1>Fruit Gallery</h1>
      </div>


      <div className="photos">
        <img src={bg} alt="bg one " width="180px"></img>
        <img src={bg1} alt="bg1  " width="180px"></img>
        <img src={bg2} alt="bg2" width="180px"></img>
        <img src={bg3} alt="bg3 " width="180px"></img>
      </div>

    </>
  );
};

export default App
