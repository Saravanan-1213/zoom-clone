import { Routes, Route, Link, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ForgetPassword from "./Components/Forgetpassword";
import "./App.css";
import { ZoomHome } from "./ZoomHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route
          path="/zoom-home"
          element={
            <ProtectedRoute>
              <ZoomHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------
function ProtectedRoute(children) {
  const isAuth = localStorage.getItem("token");
  console.log(isAuth);
  return isAuth ? children : <Navigate replace to="/login" />;
}

function checkAuth(data) {
  // (data) is to be added in zoom clone
  if (data.status == 401) {
    console.log("Unauthorized");
    throw Error("Unauthorized");
  } else {
    return data.json();
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export default App;
