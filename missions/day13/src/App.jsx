import { useState } from 'react'
import './App.css'
import CurrencyInput from "../components/CurrencyInput";

const EXCHANGE_RAGE = 1300;

// answer : https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day13/answer/src/App.jsx
function App() {
  const [krw, setKrw] = useState(0);
  const [usd, setUsd] = useState(0);

  const onChangeKrw = (value) => {
    setKrw(value);
    setUsd(value / EXCHANGE_RAGE);
  }

  const onChangeUsd = (value) => {
    setUsd(value);
    setKrw(value * EXCHANGE_RAGE);
  }

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput currency="krw" value={krw} onChange={onChangeKrw} />
      <CurrencyInput currency="usd" value={usd} onChange={onChangeUsd} />
    </div>
  )
}

export default App
