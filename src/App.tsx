import { useEffect, useState } from "react"
import MinimalistTheme from "./components/Minimalist Theme/MinimalistTheme"

function App() {
  const [fullName, setFullName] = useState("Abhishek Tiwari")
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setFullName(data.fullName))
      .catch((error) => {
        console.error("Couldn't load data.json, using fallback data", error)
      })
  }, [])
  const firstName = fullName.split(" ")[0]
  useEffect(() => {
    document.title = `${firstName}'s Portfolio`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <MinimalistTheme />
}

export default App
