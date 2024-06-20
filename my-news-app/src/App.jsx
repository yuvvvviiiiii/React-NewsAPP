import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsRoom from "./Components/NewsRoom"

const App = () => {
// Main File.
  const [category, setCategory] = useState([]);
  
  return (
    <div>
      <Navbar setCategory={setCategory} category={category}/>
      <NewsRoom category={category} />
    </div>
  )
}

export default App
