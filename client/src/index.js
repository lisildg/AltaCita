import { createRoot } from 'react-dom';
import App from './App';

// Utiliza createRoot en lugar de ReactDOM.render para React 18
createRoot(document.getElementById('root')).render(<App />);
