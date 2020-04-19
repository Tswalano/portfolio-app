import React from "react";
import RouterComponent from "./Components/RouterComponent";
import Alert from "./Components/Alert";
import FooterComponent from "./Components/FooterComponent";
import NavComponent from "./Components/NavComponent";

export default () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <NavComponent />
      <Alert />
      <RouterComponent />
      <FooterComponent />
    </div>
  );
};
