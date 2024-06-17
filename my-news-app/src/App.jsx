import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsRoom from "./Components/NewsRoom"

const App = () => {

  const [category, setCategory] = useState("general");
  
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsRoom category={category} />
    </div>
  )
}

export default App
