//style
import Layout from "./components/layout/Layout"

//components
import Clock from "./components/clock/Clock"
import Buttons from "./components/buttons/Buttons"
import Settings from "./components/settings/Settings"

// hook
import useTimer from "./hooks/useTimer"

function App() {
  const { settings } = useTimer();
  const setTime = { hr: 0, min: 1, sec: 10 }
  return (
    <Layout>
      <Clock time={setTime} />
      <Buttons />
      {settings.isActive && <Settings />}
    </Layout>
  )
}

export default App
