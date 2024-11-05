import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './komponenten/Header.jsx'
import Body from './komponenten/Body.jsx'
import ButtonBody from './komponenten/ButtonBody.jsx'
import Button from './komponenten/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Body></Body>
      <ButtonBody></ButtonBody>
      <Button></Button>
    </>
  )
}

export default App
