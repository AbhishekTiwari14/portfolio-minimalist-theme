import { useEffect } from "react"
import MinimalistTheme from "./components/Minimalist Theme/MinimalistTheme"
import data from "./data/portfolio-data.json"

function App() {
  const { fullName } = data
  const firstName = fullName.split(" ")[0]
  useEffect(() => {
    document.title = `${firstName}'s Portfolio`
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <MinimalistTheme />
}

export default App
