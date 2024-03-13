import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Component/RegistrationForm";
import LoginForm from "./Component/LoginForm";
import DataTable from "./Component/DataTable";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/table" element={<DataTable />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
