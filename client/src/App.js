import React, { useState } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import Login from "./components/Login";

function App() {
	// const [showItem, setShowItem] = useState(false);

	return (
		<div className="App">
            <Login />
            <CheckoutForm />
        </div>
    )
}

export default App;
