import React from "react";
import "./App.css";
import Catalog from "./components/Catalog/catalog";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/cart" element={<Cart />} />
						<Route path="/" element={<Catalog />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
