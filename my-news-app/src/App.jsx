import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsRoom from "./Components/NewsRoom"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
// Main File.
  const [category, setCategory] = useState([]);
  
  return (
    <div>
      <Navbar setCategory={setCategory} category={category}/>
      <NewsRoom category={category} />
      <SpeedInsights/>
    </div>
  )
}

export default App
