import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "./../../config";
import AddComp from "./AddComp";

export default () => {
  const [userInfo, setUserInfo] = useState([]);
  const [metrics, setMetrics] = useState([]);

  // Get user
  useEffect(() => {
    axios
      .get(env.url + "/index.php")
      .then(function (response) {
        const { data } = response;
        console.log(data);
        if (data && data.success) {
          setUserInfo(data.user ? data.user : {});
          setMetrics({ ...metrics, count: data.count });
        } else {
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container max-w-6xl mx-auto pt-20">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-indigo-600">
                      <i className="fas fa-tasks fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">
                      To Do List
                    </h5>
                    <h3 className="font-bold text-3xl text-gray-600">
                      7 tasks
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-orange-600">
                      <i className="fas fa-users fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">
                      Total Users
                    </h5>
                    <h3 className="font-bold text-3xl text-gray-600">
                      {metrics.count}
                      <span className="text-orange-500">
                        {" "}
                        <i className="fas fa-exchange-alt"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-red-600">
                      <i className="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">
                      Issues
                    </h5>
                    <h3 className="font-bold text-3xl text-gray-600">
                      0{" "}
                      <span className="text-red-500">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddComp/>

      <div className="container max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded shadow">
          <div className="border-b border-gray-800 p-3">
            <h5 className="font-bold uppercase text-gray-600">Table</h5>
          </div>
          <div className="p-5">
            <table className="w-full p-5 text-gray-700">
              <thead>
                <tr>
                  <th className="text-left text-gray-600">Name</th>
                  <th className="text-left text-gray-600">Surname</th>
                  <th className="text-left text-gray-600">Username</th>
                  <th className="text-left text-gray-600">Email</th>
                  <th className="text-left text-gray-600">Phone Number</th>
                </tr>
              </thead>

              <tbody className="pt-20">
                {/* {console.log(user && user.user ? "Y" : "N")} */}

                {userInfo.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.surname}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
