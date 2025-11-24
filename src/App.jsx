import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";
import Costumer from "./pages/Costumer";
import Statistics from "./pages/Statistics";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <ProtectedRoutes>
                <Product />
              </ProtectedRoutes>
            </MainLayout>
          }
        />
        <Route
          path="/costumers"
          element={
            <MainLayout>
              <ProtectedRoutes>
                <Costumer />
              </ProtectedRoutes>
            </MainLayout>
          }
        />
        <Route
          path="/statistics"
          element={
            <MainLayout>
              <ProtectedRoutes>
                <Statistics />
              </ProtectedRoutes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
