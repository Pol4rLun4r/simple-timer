//style
import Layout from "./components/layout/Layout"

//components
import Clock from "./components/clock/Clock"
import Buttons from "./components/buttons/Buttons"

function App() {
  const setTime = { hr: 0, min: 1, sec: 10 }

  return (
    <Layout>
      <Clock time={setTime} />
      <Buttons />
    </Layout>
  )
}

export default App
