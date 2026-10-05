import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <div className="app">
            <h1>React Like Card</h1>

            <div className="cards-container">
                <Card title="Learn React" />
                <Card title="Build Projects" />
                <Card title="Practice JavaScript" />
            </div>
        </div>
    );
}

export default App;