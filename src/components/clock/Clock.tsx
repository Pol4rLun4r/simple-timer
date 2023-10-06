import { useState } from "react"

// style
import Background from "./style/Background"
import { Circle } from "./style/ProgressCircle"

const Clock = () => {
    const [progress, setProgress] = useState(450);

    // setInterval(() => { 
    //     if(progress > 0){
    //         setProgress(prev => prev - 5) <- error
    //         console.log(progress);
    //     }
    // }, 1000);

    return (
        <Background>
            <Circle $progress={progress} />
        </Background>
    )
}

export default Clock