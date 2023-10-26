// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ButtonsProvider } from './context/buttons.tsx'
import { TimerProvider } from './context/timer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <TimerProvider>
    <ButtonsProvider>
      <App />
    </ButtonsProvider>
  </TimerProvider>
)
