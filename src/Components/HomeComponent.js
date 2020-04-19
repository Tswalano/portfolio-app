import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [user, setUser] = useState([]);

  // Get user
  useEffect(() => {
    // const response = fetch("http://localhost:3000/Server/index.php?id=1");
    // // console.log(response);
    // response
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((u) => {
    //     const { user } = u;
    //     setUser(user);
    //     console.log(user);
    //   })
    //   .catch((err) => {
    //     console.error("Error", err);
    //   });
    axios
      .get("http://localhost:3000/Server/index.php")
      .then(function (response) {
        const { data } = response;
        setUser(data);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //  flex-col md:mx-auto sm:max-w-md md:justify-between
  return (
    <>
      <h1 className="text-center tracking-widest font-normal text-2xl p-4 text-white font-semibold">
        Join The Team
      </h1>
      <div className="p-4 grid sm:grid-cols-1 lg:grid-cols-3">
        {user.map((u, key) => (
          <div
            className="bg-gray-300 m-2 shadow-lg rounded-lg overflow-hidden"
            key={key}
          >
            <div className="sm:flex sm:items-center px-6 py-4">
              <img
                className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://avatars3.githubusercontent.com/u/17822715?s=460&u=e70fd41658f6765598cb9c2df2c9f0b66bc489bf&v=4"
                alt=""
              />
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-xl leading-tight">
                    {u.name} {u.surname}
                  </p>
                  <p className="text-sm leading-tight text-grey-dark">
                    Developer at Freelance Inc.
                  </p>
                </div>
                <div>
                  <p className="text-xs">
                    {u.email} &#8226; {u.number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
