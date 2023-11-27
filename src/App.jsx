import { Router, Routes, Route, Vintage } from "./exporter";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vintage />} />
      </Routes>
    </Router>
  );
}

export default App;
