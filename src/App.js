import './App.css';
import {MainApp} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <MainApp/>
        </Router>
    );
}

export default App;
