import { createRoot } from 'react-dom/client'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

createRoot(document.getElementById('root')).render(
    <Routes />
)
