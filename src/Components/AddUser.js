import React, { useState } from "react";
import axios from "axios";

// w-full max-w-sm
export default () => {
  const [user, setUser] = useState();
  const [response, setResponse] = useState(null);

  function addUser() {
    axios
      .post("http://localhost:3000/Server/add.php", JSON.stringify(user))
      .then(function (response) {
        const { data } = response;
        setResponse(data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleOnChange(e) {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="p-8 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                onChange={handleOnChange}
                className="appearance-none h-8 block w-full bg-gray-100 text-gray-700 border border-red-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                onChange={handleOnChange}
                className="appearance-none h-8 block w-full bg-gray-100 text-gray-700 border border-red-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="emaiAddress"
              >
                Email Address
              </label>
              <input
                onChange={handleOnChange}
                className="appearance-none h-8 block w-full bg-gray-100 text-gray-700 border border-red-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="emaiAddress"
                type="text"
                placeholder="Email"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                onChange={handleOnChange}
                className="appearance-none h-8 block w-full bg-gray-100 text-gray-700 border border-red-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          {response ? <Notification res={response} /> : null}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => addUser(e)}
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Notification(params) {
  const { res } = params;
  if (res.success == true) {
    return (
      <div className="text-center py-2">
        <span className="flex rounded-full text-green-600 bg-green-200 px-2 py-1 text-xs font-semibold">
          {res.message}
        </span>
      </div>
    );
  } else {
    return (
      <div className="text-center py-2">
        <span className="flex rounded-full text-red-600 bg-red-200 px-2 py-1 text-xs font-semibold">
          Success
        </span>
      </div>
    );
  }
}
