// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import SideBar from "../../components/SideBar";
// import { BackendURL } from "../../utils/utils";
// import ErrorAlert from "../../components/ErrorAllert";

// export default function ExplainingCommits() {
//   const location = useLocation();
//   const { commitidx, projectidx, project_name, commit_message, git_diff } =
//     location.state || {};
//   const [err, setErr] = useState("");
//   const [explanation, setExplanation] = useState("");

//   useEffect(() => {
//     async function fetchExplanation() {
//       try {
//         const response = await fetch(`${BackendURL}/generate_commit_review`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ diff: git_diff }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setExplanation(data.commit_review);
//         } else {
//           setErr("Error fetching explanation.");
//         }
//       } catch (error) {
//         setErr("Error fetching explanation.");
//       }
//     }

//     fetchExplanation();
//   }, [git_diff]);

//   return (
//     <div className="flex w-full min-h-screen">
//       <div className="w-1/6 bg-gradient-to-br from-[#69A2AD] to-[#7315E7] border-r-3 border-[#858585] flex justify-center">
//         <SideBar />
//       </div>
//       <div className="w-5/6 bg-gradient-to-br from-[#7315E7] to-[#69A2AD] border-black flex justify-center">
//         <div className="w-5/6">
//           <div className="p-6 w-full">
//             <div className="flex justify-center mb-6">
//               <h2 className="text-white text-3xl font-semibold">
//                 Explaining Commits
//               </h2>
//             </div>
//             {err && (
//               <div>
//                 <ErrorAlert message={err} />
//               </div>
//             )}
//           </div>
//           <div className="bg-[#D4B7FA] m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//             <div className="justify-between w-full">
//               <div className="flex">
//                 <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
//                   {project_name}
//                 </h1>
//                 <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
//                   {commit_message}
//                 </h1>
//               </div>
//               <div className="w-full mt-4">
//                 <hr className="border-t-2 border-[#710AF1]" />
//                 <div className="p-4 rounded-lg shadow-lg bg-white">
//                   <p className="text-lg text-gray-700">{explanation}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import SideBar from "../../components/SideBar";
// import { BackendURL } from "../../utils/utils";
// import ErrorAlert from "../../components/ErrorAllert";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css"; // You can change to another style if needed

// export default function ExplainingCommits() {
//   const location = useLocation();
//   const { commitidx, projectidx, project_name, commit_message, git_diff } =
//     location.state || {};
//   const [err, setErr] = useState("");
//   const [explanation, setExplanation] = useState("");

//   useEffect(() => {
//     async function fetchExplanation() {
//       try {
//         const response = await fetch(`${BackendURL}/generate_commit_review`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ diff: git_diff }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setExplanation(data.commit_review); // Assume this is markdown text
//         } else {
//           setErr("Error fetching explanation.");
//         }
//       } catch (error) {
//         setErr("Error fetching explanation.");
//       }
//     }

//     fetchExplanation();
//   }, [git_diff]);

//   return (
//     <div className="flex w-full min-h-screen">
//       <div className="w-1/6 bg-gradient-to-br from-[#69A2AD] to-[#7315E7] border-r-3 border-[#858585] flex justify-center">
//         <SideBar />
//       </div>
//       <div className="w-5/6 bg-gradient-to-br from-[#7315E7] to-[#69A2AD] border-black flex justify-center">
//         <div className="w-5/6">
//           <div className="p-6 w-full">
//             <div className="flex justify-center mb-6">
//               <h2 className="text-white text-3xl font-semibold">
//                 Explaining Commits
//               </h2>
//             </div>
//             {err && (
//               <div>
//                 <ErrorAlert message={err} />
//               </div>
//             )}
//           </div>
//           <div className="bg-[#D4B7FA] m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//             <div className="justify-between w-full">
//               <div className="flex flex-wrap">
//                 <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
//                   {project_name}
//                 </h1>
//                 <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
//                   {commit_message}
//                 </h1>
//               </div>
//               <div className="w-full mt-4">
//                 <hr className="border-t-2 border-[#710AF1]" />
//                 <div className="p-4 rounded-lg shadow-lg bg-white prose max-w-none">
//                   <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                     {explanation}
//                   </ReactMarkdown>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { BackendURL } from "../../utils/utils";
import ErrorAlert from "../../components/ErrorAllert";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Change to another theme if needed

export default function ExplainingCommits() {
  const location = useLocation();
  const { commitidx, projectidx, project_name, commit_message, git_diff } =
    location.state || {};
  const [err, setErr] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    async function fetchExplanation() {
      try {
        const response = await fetch(`${BackendURL}/generate_commit_review`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ diff: git_diff }),
        });

        const data = await response.json();

        if (response.ok) {
          setExplanation(data.commit_review); // Assume this is markdown text
        } else {
          setErr("Error fetching explanation.");
        }
      } catch (error) {
        setErr("Error fetching explanation.");
      }
    }

    fetchExplanation();
  }, [git_diff]);

  // Custom Markdown rendering to improve visibility in VS Code Webview
  const markdownComponents = {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    li: ({ children }) => <li className="list-disc ml-6">{children}</li>,
    p: ({ children }) => <p className="mb-2">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-xl font-bold text-black mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-bold text-black mb-2">{children}</h2>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-sm px-1 rounded">{children}</code>
    ),
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gradient-to-br from-[#69A2AD] to-[#7315E7] border-r-3 border-[#858585] flex justify-center">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-5/6 bg-gradient-to-br from-[#7315E7] to-[#69A2AD] border-black flex justify-center">
        <div className="w-5/6">
          {/* Header */}
          <div className="p-6 w-full">
            <div className="flex justify-center mb-6">
              <h2 className="text-white text-3xl font-semibold">
                Explaining Commits
              </h2>
            </div>
            {err && (
              <div>
                <ErrorAlert message={err} />
              </div>
            )}
          </div>

          {/* Explanation Card */}
          <div className="bg-[#D4B7FA] m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="justify-between w-full">
              <div className="flex flex-wrap">
                <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
                  {project_name}
                </h1>
                <h1 className="ml-2 text-2xl font-semibold text-gray-800 flex-1">
                  {commit_message}
                </h1>
              </div>

              <div className="w-full mt-4">
                <hr className="border-t-2 border-[#710AF1]" />
                <div className="p-4 rounded-lg shadow-lg bg-white max-w-none text-gray-800">
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight]}
                    components={markdownComponents}
                  >
                    {explanation}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
