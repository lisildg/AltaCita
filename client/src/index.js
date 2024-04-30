import { createRoot } from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./redux/store"

// Utiliza createRoot en lugar de ReactDOM.render para React 18
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
);
