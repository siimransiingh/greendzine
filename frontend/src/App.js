import HomePage from "./page/HomePage";
import InfoPage from "./page/InfoPage";
import LoginPage from "./page/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/employees" element={<InfoPage />} />
          <Route path="/" element={<LoginPage />} /> {/* Default route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
