import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 브라우저의 현재 주소를 저장, 감지하는 역할
  // 앱 컴포넌트를 감싸고 있으면 현재 주소를 불러와서 쓸 수 있고, 감지할 수 있게 됨
  <BrowserRouter> 
    <App /> 
  </BrowserRouter>
)
