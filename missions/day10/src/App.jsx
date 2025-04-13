import './App.css'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Welcome name={"김현정"} isMember />
      <Welcome name={"김현정"} isMember={false} />
    </>
  )
}

export default App
