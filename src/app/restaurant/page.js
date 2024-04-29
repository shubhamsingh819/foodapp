"use client";
import React, { useState } from "react";
import RestaurentLogin from "../_components/RestaurentLogin";
import RestaurentSignUp from "../_components/RestaurentSignup";
import RestaurentHeader from "../_components/RestaurentHeader";
import "./style.css";
import RestaurentFooter from "../_components/RestaurentFooter";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1> Restaurent login / signup</h1>
        <RestaurentHeader />

        {login ? <RestaurentLogin /> : <RestaurentSignUp />}
        <div>
          <button onClick={() => setLogin(!login)} className="button-link">
            {login ? "Do not have account ? signup" : "Allready have account"}
          </button>
        </div>
      </div>
      <RestaurentFooter />
    </>
  );
};

export default Restaurent;
