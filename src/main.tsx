import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TimerProvider } from './context/TimerContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TimerProvider>
    <App />
  </TimerProvider>
)
