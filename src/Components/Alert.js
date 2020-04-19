import React from "react";

function Alert() {
  return (
    <div>
      <div className="bg-red-900 text-center py-4 lg:px-4">
        <div
          className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            Notice
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            We are currently working on this project, please come back later!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Alert;
