import { useContext } from "react";
import "./App.css";
import APIKeyContext from "./APIKeyContext";

function App() {
	const [key] = useContext(APIKeyContext);

	return (
		<APIKeyContext.Provider value={key}>
			<>
				<p>App</p>
			</>
		</APIKeyContext.Provider>
	);
}

export default App;
