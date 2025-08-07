import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function GoBack() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

  return (
    <button class="waves-effect waves-light btn" onClick={handleGoBack}>
      Go Back
    </button>
    
  );
}
