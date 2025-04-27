const CurrencyInput = ({ currency, value, onChange }) => {
  return (
    <div>
      <label>{currency}:</label>
      <input value={value} type="number" onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default CurrencyInput;