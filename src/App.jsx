import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
// import { Dashboard } from "./components/dashboard";
// import { Landing } from "./components/landing";
const Dashboard = lazy(() => import("./components/dashboard"));
const Landing = lazy(() => import("./components/landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading"}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading"}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Topbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard page
      </button>
    </div>
  );
}

export default App;
