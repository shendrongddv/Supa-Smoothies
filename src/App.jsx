import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create New Smoothies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
