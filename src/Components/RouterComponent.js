import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AddUser from "./AddUser";
import AddComp from "./Test/AddComp";
import HomeComp from "./Test/HomeComp";
import Test from "./Test/Test";
import ProjectsComp from "./Test/ProjectsComp";

function RouterComponent() {
  return (
    <Router>
      <div>
        {/* <div class="bg-indigo-900 text-center py-4 lg:px-4"> */}
          <div
            class="w-full p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              Alert
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              We are currently building this system...
            </span>
            <svg
              class="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        {/* </div> */}
        <Route path="/" component={HomeComponent} exact />
        {/* Test */}
        <Route path="/test/" component={HomeComp} exact />
        <Route path="/test/projects" component={ProjectsComp} exact />
        <Route path="/test/add" component={AddComp} exact />
        <Route path="/test/test" component={Test} exact />
      </div>
    </Router>
  );
}
export default RouterComponent;
