import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)

/* 
  * StrictMode
  - 잠재적인 문제를 조기에 발견할 수 있게 도와주는 개발전용도구
  - StrictMode의 하위 컴포넌트에 대해서 추가적인 검사와 경고 기능이 활성화 (개발환경에서만)
*/
