import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'



const clientid = import.meta.env.VITE_GOOGLE_CLIENT_ID;
console.log(clientid)

ReactDOM.createRoot(document.getElementById("root")).render(

    <App />

);
