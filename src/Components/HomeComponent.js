import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "../config";

export default () => {
  return (
    <>
      <h1 className="text-3xl font-bold leading-tight text-white">Dashboard</h1>

      <div className="container">
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
                      Projects
                    </h5>
                    <h3 className="font-bold text-3xl text-gray-600">2</h3>
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
                      0
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
                      Tickets
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

      {/* CTA */}
      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Ready to dive in?
            <br />
            <span class="text-indigo-600">Start your free trial today.</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
