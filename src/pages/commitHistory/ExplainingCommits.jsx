import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function ExplainingCommits() {
  // Accessing the state passed from the previous page
  const location = useLocation();
  const { commitidx, projectidx,  project_name, commit_message,git_diff } = location.state || {};
  const explanations = [
    "sentense1",
    "sentense2",
    "sentense3",
    "sentense4",
    "sentense5",
  ];

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/6 bg-gradient-to-br from-[#69A2AD] to-[#7315E7] border-r-3 border-[#858585] flex justify-center">
        <SideBar />
      </div>
      <div className="w-5/6 bg-gradient-to-br from-[#7315E7] to-[#69A2AD] border-black flex justify-center">
        {/* Right Panel */}
        <div className= "w-5/6">
          <div className="p-6 w-full">
            <div className="flex justify-center mb-6">
              <h2 className="text-white text-3xl font-semibold">
                Explaining Commits
              </h2>
            </div>
          </div>
          <div className=" bg-[#D4B7FA] m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out justify-between items-center">
            <div className=" justify-between w-full">
              <div className="flex">
                <h1 className="ml-2 text-2xl font-semibold text-gray-800 text-center flex-1">
                  {project}
                </h1>
                <h1 className="ml-2 text-2xl font-semibold text-gray-800 text-center flex-1">
                  {commit}
                </h1>
              </div>
              <div className="w-full mt-4">
                <hr className="border-t-2 border-[#710AF1]" />
                <div className="p-4 rounded-lg shadow-lg">
                  {explanations.map((sentense, sentenseidx) => (
                    <div
                      className="flex bg-white p-4 m-2 rounded-lg justify-between items-center shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
                      key={sentenseidx}
                    >
                      <div className="flex items-center">
                        <h1 className="mr-4 text-lg font-semibold text-gray-600">
                          {sentenseidx + 1}
                        </h1>
                        <h1 className="text-lg text-gray-700">{sentense}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
