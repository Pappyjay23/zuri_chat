import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard/Dashboard";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<ContactUs />} />
					{/* <Route path='/dashboard' element={<Dashboard />} /> */}
				</Routes>
			</Router>
		</>
	);
};

export default App;
