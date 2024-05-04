import Home from "./pages/Home/Home";
import Users from "./pages/users/Users";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./pages/create-user/CreateUser";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
