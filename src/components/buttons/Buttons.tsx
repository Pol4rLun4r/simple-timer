// style
import Container from "./style/Container";

//Buttons Components
import PlayPause from "./PlayPause";
import Settings from "./Settings";
import Restart from "./Restart";

const Buttons = () => {

  return (
    <Container>
      <Settings />
      <PlayPause />
      <Restart />
    </Container>
  )
}

export default Buttons;