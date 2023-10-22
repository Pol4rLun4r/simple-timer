//style
import Layout from "./components/layout/Layout"

//components
import Clock from "./components/clock/Clock"

function App() {
  const setTime = {hr: 0, min: 1, sec: 10}

  return (
    <Layout>
      <Clock time={setTime}/>
    </Layout>
  )
}

export default App
