const Button = ({ text, color = "black", children }) => {
  return (
    <button style={{ color }}>
      {text}
      {children}
    </button>
  )
}

export default Button;