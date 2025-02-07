import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "../../components/Form/Form";
import Header from "../../components/Layout/Header/Header";

function Home() {
  return (
    <div className="m-5 flex flex-col items-center">
      <Header />
      <Form />
      <ToastContainer />
    </div>
  );
}

export default Home;
