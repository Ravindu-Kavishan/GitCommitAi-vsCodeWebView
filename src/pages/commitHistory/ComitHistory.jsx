import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import arrow from "../../images/arrow.svg";
import { useNavigate } from "react-router";

export default function CommitHistory() {
  const arr = {
    Project1: ["commit1", "commit2", "commit3"],
    Project2: ["commit1", "commit2", "commit3"],
    Project3: ["commit1", "commit2", "commit3"],
    Project4: ["commit1", "commit2", "commit3"],
  };
  const navigate = useNavigate();

  // State to keep track of expanded project
  const [expandedProject, setExpandedProject] = useState(null);

  // Toggle expansion of the project
  function handleArrowClick(projectidx) {
    setExpandedProject(expandedProject === projectidx ? null : projectidx);
  }
  function expandClicked(commitidx, projectidx, project, commit) {
    navigate("/ExplainingCommits", {
      state: { commitidx, projectidx, project, commit },
    });
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/6 bg-gradient-to-br from-[#69A2AD] to-[#7315E7] border-r-3 border-[#858585] flex justify-center">
        <SideBar />
      </div>
      <div className="w-5/6 bg-gradient-to-br from-[#7315E7] to-[#69A2AD] border-black flex justify-center">
        {/* Right Panel */}
        <div className="p-6 w-5/6">
          <div className="flex justify-center mb-6">
            <h2 className="text-white text-3xl font-semibold">
              Commit History
            </h2>
          </div>

          <ul>
            {Object.keys(arr).map((project, projectidx) => (
              <div
                className=" bg-[#D4B7FA] m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out justify-between items-center"
                key={projectidx}
              >
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-xl font-semibold">{projectidx + 1}</h1>
                  <h1 className="ml-2 text-2xl font-semibold text-gray-800 text-center flex-1">
                    {project}
                  </h1>
                  <img
                    src={arrow}
                    alt="Arrow"
                    onClick={() => handleArrowClick(projectidx)}
                    className="cursor-pointer w-6 h-6 transition-transform duration-300 ease-in-out transform hover:rotate-180"
                  />
                </div>

                {/* Conditionally render commit details */}
                {expandedProject === projectidx && (
                  <div className="w-full mt-4">
                    <hr className="border-t-2 border-[#710AF1]" />
                    <div className="p-4 rounded-lg shadow-lg">
                      {arr[project].map((commit, commitidx) => (
                        <div
                          className="flex bg-white p-4 m-2 rounded-lg justify-between items-center shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
                          key={commitidx}
                        >
                          <div className="flex items-center">
                            <h1 className="mr-4 text-lg font-semibold text-gray-600">
                              {commitidx + 1}
                            </h1>
                            <h1 className="text-lg text-gray-700">{commit}</h1>
                          </div>
                          <button
                            className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out"
                            onClick={() =>
                              expandClicked(
                                commitidx,
                                projectidx,
                                project,
                                commit
                              )
                            }
                          >
                            Explain
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
