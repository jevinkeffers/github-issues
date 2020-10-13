import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IssueList from "./components/IssueList";

function App() {
    return (
        <div className="App">
            <Router>
                <IssueList />
            </Router>
        </div>
    );
}

export default App;
