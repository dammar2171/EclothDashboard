import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";
import Costumer from "./pages/Costumer";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />
        <Route
          path="/costumers"
          element={
            <MainLayout>
              <Costumer />
            </MainLayout>
          }
        />
        <Route
          path="/statistics"
          element={
            <MainLayout>
              <Statistics />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
