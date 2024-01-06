import React from "react";
import "./ErrorPage.css";

const ErrorPage: React.FunctionComponent = () => {
  return (
    <div className='error-container'>
      <h1>404</h1>
      <p>The page you are looking for cannot be found</p>
    </div>
  )
};

export default ErrorPage;
